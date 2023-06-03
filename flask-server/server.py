from flask import Flask, jsonify, request

app = Flask(__name__)

translation_data = {
    "kumusta": "kumusta",
    "pangalan": "ngalan",
    "ano": "unsa",
    "mo": "imong",
    "ako": "ako",
    "kaibigan": "higala",
    "araw": "adlaw",
    "bahay": "balay",
    "tubig": "tubig",
    "pagkain": "kaon",
    "lakad": "lakaw",
    "paalam": "paalam",
    "salamat": "salamat",
    "mangyaring": "palihug",
    "oo": "oo",
    "hindi": "dili",
    "maganda": "gwapa",
    "malayo": "layo",
    "gutom": "gutom",
    "tahanan": "balay",
    "lalaki": "lalaki",
    "babaeng": "babaye",
    "pag-ibig": "gugma",
    "mag-aral": "magtuon",
    "bata": "bata",
    "matulog": "tulog",
    "bahaghari": "bahandi",
    "ulan": "ulan",
    "init": "init",
    "lamig": "kabugnaw",
    "kain": "kaon",
    "inom": "inom",
    "lugar": "lugar",
    "litrato": "litratu",
    "libro": "libro",
    "isip": "huna",
    "pag-asa": "paglaum",
    "lumakad": "panaw",
    "buwan": "bulan",
    "bituin": "bitoon",
    "pinto": "pultahan",
    "bintana": "bintana",
    "kwarto": "kuwarto",
    "kotse": "sakyanan",
    "bisikleta": "bisikleta",
    "tren": "tren",
    "dagat": "dagat",
    "ilog": "sapa",
    "bundok": "bukid",
    "puno": "kahoy",
    "bulaklak": "bunga",
    "eskwela": "eskwela",
    "trabaho": "trabaho",
    "pera": "kwarta",
    "oras": "oras",
    "bilihin": "paliton",
    "pamasahe": "pamasahe",
    "kape": "kape",
    "tsaa": "tsaa",
    "kamay": "kamot",
    "paa": "tiil",
    "mata": "mata",
    "ilong": "ilong",
    "bibig": "baba",
    "tainga": "talinga",
    "ulo": "ulo",
    "likod": "likod",
    "tiyan": "tina",
    "puso": "kasingkasing",
    "kamiseta": "blusa",
    "pantalon": "sinsilyo",
    "sapatos": "sapatos",
    "silya": "lamesa",
    "lamesa": "lamesa",
    "tasa": "tasa",
    "kutsara": "kutsara",
    "kutsilyo": "kutsilyo",
    "plato": "plato",
    "baso": "baso",
    "malinis": "linis",
    "marumi": "hugaw",
    "mabait": "mahigugmaon",
    "masama": "dautan",
    "masarap": "lami",
    "mainit": "init",
    "malamig": "bugnaw",
    "madilim": "hagnaw",
    "maliwanag": "hayag",
    "lalim": "lawom",
    "dito": "diri"
}

@app.route('/api/translate', methods=['POST'])
def translate_text():
    data = request.get_json()
    text = data.get('text', '')

    translated_text = translate(text)

    return jsonify({'translated_text': translated_text})

def translate(text):
    words = text.split(' ')
    translated_words = []

    for word in words:
        translated_word = translation_data.get(word.lower(), word)
        translated_words.append(translated_word)

    translated_text = ' '.join(translated_words)
    return translated_text

if __name__ == '__main__':
    app.run(host = '192.168.1.7',port=24,debug=True)


# from flask import Flask
# from googletrans import Translator

# translater = Translator()

# out = translater.translate("Masaya maging tao", dest="ceb")

# app = Flask(__name__)


# @app.route('/members')



# def members():
#     return {'members':[out.text ]}


# if __name__ == "__main__":
#     app.run(host = '192.168.0.24',port=5000,debug=True)


