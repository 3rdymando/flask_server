import os
from flask import Flask, request, render_template, jsonify
import torch
from torchvision import models, transforms
from PIL import Image
import numpy as np
import gdown

app = Flask(__name__)

# Define constants
MODEL_PATH = "../models/inceptionv3.pth"
NUM_CLASSES = 3
CLASS_NAMES = ["Armyworm", "Cutworm", "Red Spider Mites"]
DEVICE = torch.device("cpu")

if not os.path.exists(MODEL_PATH):
    print("Downloading model...")
    gdown.download(id="1efOvJ1pRjHnBjs2bf5jc2LjotA9tPybF", output=MODEL_PATH)
    
# Define preprocessing pipeline
PREPROCESS = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

# Load the model
try:
    print("***Load the trained InceptionV3 model...")
    model = models.inception_v3(pretrained=False, aux_logits=False)
    num_ftrs = model.fc.in_features
    model.fc = torch.nn.Sequential(
    torch.nn.Linear(num_ftrs, 512),
    torch.nn.ReLU(),
    torch.nn.Dropout(0.5),
    torch.nn.Linear(512, NUM_CLASSES)
)
    model.load_state_dict(torch.load(MODEL_PATH, map_location=DEVICE))
    model.eval()
    print("***Loading model... Done.")
except Exception as e:
    print(f"Error loading model: {e}")
    raise

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        image = Image.open(file).convert('RGB')
        image = PREPROCESS(image).unsqueeze(0).to(DEVICE)
        with torch.no_grad():
            outputs = model(image)
            _, predicted = torch.max(outputs, 1)
        return jsonify({'prediction': CLASS_NAMES[predicted.item()]})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
