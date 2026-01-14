# 🎓 Guide de Formation - The 5 Cup
## Gérer votre site en toute autonomie

*Durée de formation : 15 minutes*

---

## 🎯 Ce que vous allez apprendre

À la fin de ce guide, vous saurez :
- ✅ Modifier le contenu de votre site
- ✅ Voir vos modifications en ligne automatiquement
- ✅ Surveiller l'état de votre site
- ✅ Résoudre les problèmes courants

**Aucune compétence technique requise !**

---

## 📋 Vue d'ensemble : Comment ça fonctionne ?

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   GITHUB    │  →   │   VERCEL    │  →   │ SITE EN     │
│ (Code)      │      │ (Build)     │      │ LIGNE       │
└─────────────┘      └─────────────┘      └─────────────┘
     ↑                                          ↓
     └──────────────────────────────────────────┘
        Vous modifiez → Déploiement automatique
```

**En résumé :**
1. Vous modifiez un fichier sur **GitHub**
2. **Vercel** détecte la modification automatiquement
3. Votre **site se met à jour** (1-2 minutes)

---

## 1️⃣ MODIFIER LE CONTENU (GitHub)

### 📍 Accès à votre code

**Étape 1 : Connectez-vous à GitHub**
```
🔗 https://github.com
→ Se connecter avec vos identifiants
```

**Étape 2 : Accédez au projet**
```
→ Cliquez sur votre profil (en haut à droite)
→ "Your repositories"
→ Sélectionnez "the-5-cup"
```

**✅ Vous êtes maintenant dans le code source de votre site !**

---

### ✏️ Exemple pratique : Modifier le titre de la page d'accueil

**Étape par étape :**

1. **Naviguez dans les dossiers :**
   ```
   Clic sur "src" → "components" → "HeroSection.astro"
   ```

2. **Éditez le fichier :**
   ```
   → Clic sur l'icône ✏️ (en haut à droite du fichier)
   ```

3. **Trouvez le titre à modifier :**
   ```html
   Ligne ~30 :
   <h1>The 5 Cup</h1>

   Changez en :
   <h1>The 5 Cup 2026</h1>
   ```

4. **Enregistrez la modification :**
   ```
   → Descendez en bas de la page
   → Section "Commit changes"
   → Ajoutez un message : "Mise à jour du titre"
   → Clic sur "Commit changes" (bouton vert)
   ```

**🎉 C'est fait ! Vercel va détecter cette modification automatiquement.**

---

### 📝 Autres modifications courantes

#### **Changer la date de la compétition**

**Fichier :** `src/components/CountdownTimer.astro`

```javascript
Ligne ~2 :
const targetDate = new Date('2026-04-25T09:00:00');

Changez la date → Commit changes
```

#### **Modifier les informations de contact**

**Fichier :** `src/components/Footer.astro`

```javascript
Ligne ~5-9 :
const contactInfo = {
  email: 'contact@the5cup.fr',
  phone: '+33 1 23 45 67 89',
  address: '...'
}

Modifiez les valeurs → Commit changes
```

#### **Ajouter une équipe**

**Fichier :** `src/pages/competition.astro`

```javascript
Ligne ~80-100 (environ) :
const teamsByPoule = {
  terre: [
    { name: "Guerriers Verts", icon: Users },
    { name: "VOTRE NOUVELLE ÉQUIPE", icon: Users }, // Ajoutez ici
    ...
  ]
}
```

---

### ⚠️ Règles importantes

**✅ À FAIRE :**
- Modifier le TEXTE entre les guillemets `"comme ceci"`
- Modifier les CHIFFRES (dates, nombres)
- Ajouter un message de commit clair

**❌ NE PAS FAIRE :**
- Supprimer les symboles : `<` `>` `/` `{` `}` `[` `]`
- Modifier les noms de fichiers
- Supprimer des lignes entières (sauf si vous savez ce que vous faites)

**💡 Conseil :** Si vous cassez quelque chose, pas de panique ! On peut toujours revenir en arrière (voir section Dépannage).

---

## 2️⃣ VOIR L'ÉTAT DU SITE (Vercel)

### 🖥️ Accès au tableau de bord Vercel

**Étape 1 : Connectez-vous à Vercel**
```
🔗 https://vercel.com
→ Se connecter (normalement avec GitHub)
```

**Étape 2 : Accédez au projet**
```
→ Vous voyez "the-5-cup" dans la liste
→ Cliquez dessus
```

---

### 📊 Comprendre le tableau de bord

#### **Section "Deployments" (Déploiements)**

C'est ici que vous voyez toutes les mises à jour :

```
┌─────────────────────────────────────────────────┐
│ ✅ Ready       main        2 minutes ago        │
│ 🔄 Building    main        Just now             │
│ ✅ Ready       main        1 hour ago           │
└─────────────────────────────────────────────────┘
```

**États possibles :**
- ✅ **Ready** = En ligne, tout fonctionne
- 🔄 **Building** = En cours de mise à jour (1-2 min)
- ❌ **Error** = Problème (voir logs pour comprendre)

#### **Section "Production Deployment"**

C'est votre **site en ligne actuel** :

```
┌─────────────────────────────────────────────────┐
│ 🌐 https://the-5-cup.vercel.app                 │
│                                                  │
│ [Visit] [View Logs]                             │
└─────────────────────────────────────────────────┘
```

**Boutons utiles :**
- **Visit** : Voir le site en ligne
- **View Logs** : Voir les détails techniques (si problème)

#### **Section "Domains"**

Si vous ajoutez un nom de domaine personnalisé (ex: `the5cup.com`) :

```
→ Settings → Domains → Add Domain
→ Suivre les instructions DNS
```

---

### 🔍 Suivre une mise à jour en temps réel

**Scénario : Vous venez de modifier un fichier sur GitHub**

1. **Allez sur Vercel → Deployments**
2. **Vous voyez un nouveau déploiement en cours** :
   ```
   🔄 Building    main    Just now
   ```
3. **Cliquez dessus pour voir les détails**
4. **Attendez 1-2 minutes**
5. **État passe à ✅ Ready**
6. **Cliquez sur "Visit" pour voir vos modifications en ligne !**

---

## 3️⃣ Exemple concret

### 🎯 Mission : Changer le numéro de téléphone de contact

**Étape 1 : GitHub (2 min)**
```
1. GitHub.com → Connexion
2. the-5-cup → src → components → Footer.astro
3. Clic ✏️ (Edit)
4. Ligne ~7 : phone: '+33 6 12 34 56 78'
5. Commit changes avec message "Mise à jour téléphone"
```

**Étape 2 : Vercel (2 min)**
```
1. Vercel.com → Connexion
2. the-5-cup → Deployments
3. Voir le nouveau build 🔄 Building
4. Attendre → ✅ Ready (1-2 min)
```

**Étape 3 : Vérification (30 sec)**
```
1. Clic "Visit" ou allez sur https://the-5-cup.vercel.app
2. Scrollez en bas de page (Footer)
3. ✅ Le nouveau numéro s'affiche !
```

---

## 🆘 DÉPANNAGE

### ❌ Problème : "J'ai cassé quelque chose"

**Solution : Annuler la modification**

**Sur GitHub :**
```
1. Allez sur le fichier que vous avez modifié
2. Clic "History" (en haut à droite)
3. Trouvez la version précédente (avant votre modification)
4. Clic sur le code "<>"
5. Copiez tout le contenu
6. Retournez au fichier actuel
7. Edit → Collez l'ancien contenu → Commit
```

**Ou contactez votre équipe technique** (nous pouvons restaurer en 2 min).

---

### ❌ Problème : "Le build échoue sur Vercel"

**Symptômes :**
```
Deployments → ❌ Error (au lieu de ✅ Ready)
```

**Solution :**
```
1. Clic sur le déploiement en erreur
2. Regardez les logs (cherchez des lignes en rouge)
3. Souvent c'est une erreur de syntaxe (guillemet manquant, etc.)
4. Retournez sur GitHub
5. Annulez votre dernière modification (voir ci-dessus)
6. Ou contactez l'équipe technique avec un screenshot des logs
```

---

### ❌ Problème : "Les images ne s'affichent pas"

**Vérifications :**
```
1. L'image est dans le dossier public/assets/ ?
2. Le chemin commence par / ?
   ✅ Bon : src="/assets/photo.jpg"
   ❌ Mauvais : src="assets/photo.jpg"
3. L'extension est en minuscules ?
   ✅ Bon : .jpg .png .webp
   ❌ Mauvais : .JPG .PNG
```

---

## 📚 RESSOURCES UTILES

### 📖 Documentation

- **README.md** : Guide complet pour modifications avancées
- **Ce fichier** : Guide rapide pour modifications courantes

---

## 📊 RÉSUMÉ

```
Modifier le site :
1. GitHub.com → the-5-cup → Fichier → Edit ✏️
2. Changez le texte → Commit changes
3. Vercel.com → Attendez ✅ Ready (1-2 min)
4. Visitez le site → Modifications visibles !
```

---

## 🙏 MERCI !

Merci de nous avoir fait confiance pour ce projet.

N'hésitez pas à nous contacter pour toute question !

**Bonne gestion de votre site The 5 Cup !** 🏆⚽

---