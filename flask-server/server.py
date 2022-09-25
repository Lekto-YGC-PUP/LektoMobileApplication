from flask import Flask
from googletrans import Translator

translater = Translator()

out = translater.translate("Masaya maging tao", dest="ceb")

app = Flask(__name__)


@app.route('/members')



def members():
    return {'members':[out.text ]}


if __name__ == "__main__":
    app.run(host = '192.168.0.20',port=5000,debug=True)


