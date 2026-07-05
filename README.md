# 🧠 Handwritten Digit Classification using CNN

This project trains a Convolutional Neural Network (CNN) to classify handwritten digits (0–9) using the MNIST dataset. The trained model is saved for later use in prediction systems or APIs.

---

## 🚀 Project Overview

This script:
- Loads the MNIST dataset
- Preprocesses and normalizes image data
- Builds a CNN model using TensorFlow/Keras
- Trains the model on digit images
- Saves the trained model for future use

---

## 🧠 Model Architecture

The CNN model consists of:

- Conv2D (32 filters, 3x3 kernel, ReLU)
- MaxPooling2D (2x2)
- Conv2D (64 filters, 3x3 kernel, ReLU)
- MaxPooling2D (2x2)
- Flatten layer
- Dense layer (128 neurons, ReLU)
- Output layer (10 classes, Softmax)

---

## 📊 Dataset

- Dataset: MNIST
- 60,000 training images
- 10,000 testing images
- Image size: 28x28 grayscale digits (0–9)

---

## ⚙️ Installation

### 1. Clone the repository
```bash id="h3k9qv"
git clone <repo-url>
2. Install dependencies
pip install tensorflow
▶️ How to Run

Run the training script:

python train_cnn.py
💾 Output

After training, the model will be saved at:

models/digit_cnn.h5
📦 Project Structure
project/
│
├── train_cnn.py          # Model training script
├── models/
│   └── digit_cnn.h5      # Saved trained model
└── README.md             # Project documentation
📈 Model Performance
Uses Adam optimizer
Loss function: Sparse Categorical Crossentropy
Metric: Accuracy
Trained for 5 epochs
🔮 Future Improvements
Add data augmentation
Improve accuracy with deeper CNN
Deploy model using Flask/FastAPI
Add real-time digit drawing UI
👨‍💻 Author

Rithiha Elangovan

📜 License

This project is intended for educational and learning purposes.


---

If you want, I can also:
✅ Add badges (TensorFlow, Python, license)  
✅ Make it GitHub “premium style” README  
✅ Add architecture diagram  
✅ Add sample output images  
✅ Add deployment section (Flask / React integration)
