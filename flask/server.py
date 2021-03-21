from flask import Flask
app = Flask(__name__)

@app.route('/staj')
def hello_flask():
    return 'Hello World from Flask!\n'

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=4444)