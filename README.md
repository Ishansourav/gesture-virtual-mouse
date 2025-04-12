  <h1>🖱️ Gesture Controlled Virtual Mouse</h1>
  <p>An AI-powered, touchless interface that uses hand gestures and voice commands to control the computer—no physical contact required.</p>

  <div class="section">
    <h2>🔍 Description</h2>
    <p>This project simplifies human-computer interaction by utilizing state-of-the-art Machine Learning and Computer Vision to detect static and dynamic hand gestures using MediaPipe and CNN. It also includes a voice assistant named <strong>Proton</strong> to handle system operations via speech, all without requiring any special hardware. Compatible with Windows systems.</p>
  </div>

  <div class="section">
    <h2>✨ Features</h2>
    <h3>🎯 Gesture Recognition:</h3>
    <ul>
      <li>Move Cursor</li>
      <li>Left Click, Right Click, Double Click</li>
      <li>Scroll, Drag & Drop</li>
      <li>Multiple Item Selection</li>
      <li>Volume & Brightness Control</li>
    </ul>
    <h3>🎙️ Voice Assistant – Proton:</h3>
    <ul>
      <li>Start/Stop Gesture Module</li>
      <li>Google Search, Google Maps</li>
      <li>File Navigation, Copy/Paste</li>
      <li>System Time, Sleep/Wake, Exit</li>
    </ul>
  </div>

  <div class="section">
    <h2>⚙️ Getting Started</h2>
    <p><strong>Python Version:</strong> 3.8.5</p>
    <pre><code>git clone https://github.com/yourusername/gesture-virtual-mouse.git
cd gesture-virtual-mouse
pip install -r requirements.txt
python main.py</code></pre>
  </div>

  <div class="section">
    <h2>📂 Code Structure</h2>
    <pre><code>gesture-virtual-mouse/
├── main.py
├── gesture_controller/
│   ├── hand_tracker.py
│   ├── glove_detector.py
│   ├── gesture_classifier.py
│   └── mouse_controller.py
├── voice_assistant/
│   ├── proton.py
│   ├── speech_recognizer.py
│   └── command_executor.py
├── utils/
│   ├── config.py
│   └── helpers.py
├── resources/
│   └── models/
├── requirements.txt
└── README.md</code></pre>
  </div>

  <div class="section">
    <h2>📜 Flowchart / 📌 Architecture</h2>
    <p><strong>Flow:</strong> Start → Hand Detection → Landmark Extraction → Gesture Classifier → Mouse/Voice Action</p>
    <p><strong>Architecture:</strong></p>
    <pre><code>+ Webcam Input
    ↓
+ MediaPipe / Glove Detection
    ↓
+ Landmark / Color Extraction
    ↓
+ Gesture Classifier (CNN / Rules)
    ↓
+ PyAutoGUI (Mouse Actions)
    ↘
+ Proton (Voice Assistant) → System / Web Commands</code></pre>
   
  <div class="section">
    <h2>🔍 Comparative Analysis</h2>
    <table border="1" cellpadding="8">
      <thead>
        <tr>
          <th>Feature</th><th>Traditional Mouse</th><th>Touch Screen</th><th>Gesture Mouse</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Hardware</td><td>High</td><td>Medium</td><td>Low</td></tr>
        <tr><td>Contactless</td><td>No</td><td>No</td><td>Yes</td></tr>
        <tr><td>Voice Control</td><td>No</td><td>No</td><td>Yes</td></tr>
        <tr><td>Accessibility</td><td>Low</td><td>Medium</td><td>High</td></tr>
        <tr><td>Cost</td><td>Medium</td><td>Low</td><td>High</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section">
    <h2>💻 Language & Tool Roles</h2>
    <ul>
      <li><strong>Python</strong> - Core development</li>
      <li><strong>MediaPipe</strong> - Hand tracking</li>
      <li><strong>OpenCV</strong> - Video feed & processing</li>
      <li><strong>PyAutoGUI</strong> - Mouse control</li>
      <li><strong>SpeechRecognition</strong> - Voice input</li>
      <li><strong>pyttsx3</strong> - Voice output</li>
    </ul>
  </div>

  <div class="section">
    <h2>🔧 System Layers</h2>
    <ul>
      <li><strong>Input Layer:</strong> Webcam & Microphone</li>
      <li><strong>Processing Layer:</strong> ML models & command logic</li>
      <li><strong>Output Layer:</strong> Mouse Actions & Voice Response</li>
    </ul>
  </div>

  <div class="section">
    <h2>🔮 Upcoming Features</h2>
    <ul>
      <li>Cross-platform support (Linux, Windows)</li>
      <li>Dynamic gesture recognition (LSTM)</li>
      <li>Depth sensor support (e.g., RealSense)</li>
      <li>Multilingual Voice Assistant (Hindi, German, etc.)</li>
      <li>GUI dashboard for config/logs</li>
    </ul>
  </div>

  <div class="section">
    <h2>🧠 Strategic Recommendations</h2>
    <ul>
      <li>Deploy with PyInstaller or Electron for full desktop use</li>
      <li>Use ONNX or TensorRT for faster inference</li>
      <li>Great for use in accessibility tech, smart homes, or touchless UIs</li>
    </ul>
  </div>

  <footer>
    <p>© 2025 Gesture Controlled Virtual Mouse. All rights reserved.</p>
  </footer>
</body>
</html>
