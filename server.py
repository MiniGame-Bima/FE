from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

@app.route('/start-game', methods=['POST'])
def start_game():
    try:
        # Snake 게임 스크립트를 실행
        subprocess.Popen(['python', 'snake_game.py'])
        return jsonify({"status": "success", "message": "게임이 시작되었습니다!"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
