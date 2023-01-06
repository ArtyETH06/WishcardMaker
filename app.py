from flask import Flask, render_template, request

app = Flask(__name__)   #Création de l'app "app"

@app.route('/')  #Chemin de base
def index():
    return render_template('index.html')

@app.route('/resultat',methods = ['GET'])   #Pour les résultats
def resultat():
    result = request.args
    n = result['nom']    #Les arguments
    f = result['from_input'] #Les arguments
    paragraphe = result['paragraphe'] #Le arg paragrphe
    return render_template("resultat.html", nom = n, from_input = f, paragraphe = paragraphe )

app.run(debug=True)   #Lancer l'app







"""from flask import Flask, render_template #Import de Flask + render template
import datetime

app = Flask(__name__)  # Création de l'objet "app"



#---------------------------------------------------------------------index------------------------------------------------------
@app.route('/') 
def index():
    date = datetime.datetime.now() #Récupérer l'heure maintenant
    h = date.hour
    m = date.minute
    s = date.second
    return render_template("index.html",heure = h, minute = m, seconde = s)

app.run(debug=True) #Lancement du serveur"""