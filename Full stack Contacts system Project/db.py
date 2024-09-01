from flask import Flask, render_template, request, redirect

import mysql.connector

# create a connection to the database





#create basic flask boilerplate
app = Flask(__name__)


if __name__ == '__main__':
   app.run(debug=True)