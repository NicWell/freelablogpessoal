from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
@app.route('/index.html')
def index():
    return render_template('index.html')


@app.route('/contato.html')
def contato():
    return render_template('contato.html')


@app.route('/social.html')
def social():
    return render_template('social.html')


@app.route('/login.html')
def login():
    return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=True)
