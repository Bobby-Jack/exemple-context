![image](https://github.com/Bobby-Jack/exemple-context/assets/68663284/3cea04f4-a691-4998-b55a-83dacb158d03)

# USAGE DU CONTEXT

Les donnée de votre site peuvent être centralisé dans un fichier qui s'occupera de tout sa gestion.
l'intéret est double:
1. Vous éviter ainsi de devoir passer en props les infos de tout vos donnée dans votre arboraissance.
2. Vous alèger vos fichier composent qui n'auront pas à contenir les fonctions de gestion des données.


# EXEMPLE CONTEXT ET BONNE PRATIQUE

1. créer un fichier de context dans le dossier src/contexts (ThemeContext.jsx)
2. rédigé un context à l'aide create context et l'exporté (ThemeContext)
3. créer un composent Provider à l'aide du context créer juste avant (ThemeContextProvider)
4. englobé le return du App.jsx dans le composent Provider qu'on vient de créer (<ThemeContextProvider></ThemeContextProvider>)
5. appellé un attribut du context dans le composent qui en a besoin à l'aide de useContext (Home.jsx et About.jsx)
6. enjoy!

