// Gestionnaire d'événements une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    // Vérification que le fichier de configuration est bien chargé
    if (!window.appConfig) {
        showStatus("Erreur: fichier de configuration non trouvé", true);
        return;
    }

    // Initialisation de l'application
    initializeApp();
    
    // Gestion des événements
    setupEventListeners();
    
    // Charger les prompts sauvegardés
    loadSavedPrompts();
});

// Fonction pour afficher un message de statut
function showStatus(message, isError = false) {
    const statusEl = document.getElementById('statusMessage');
    statusEl.textContent = message;
    statusEl.className = isError ? 'status-message status-error' : 'status-message status-success';
    statusEl.style.display = 'block';
    
    // Masquer le message après 5 secondes
    setTimeout(() => {
        statusEl.style.display = 'none';
    }, 5000);
}

// Fonction pour peupler une liste déroulante à partir des options de configuration
function populateSelectOptions(selectId, options) {
    const selectElement = document.getElementById(selectId);
    if (!selectElement) return;
    
    selectElement.innerHTML = '';
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        selectElement.appendChild(optionElement);
    });
}

// Fonction pour peupler un groupe de cases à cocher
function populateCheckboxGroup(groupId, options) {
    const groupElement = document.getElementById(groupId);
    if (!groupElement) return;
    
    groupElement.innerHTML = '';
    options.forEach(option => {
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'checkbox-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = option.id;
        checkbox.value = option.value;
        
        const label = document.createElement('label');
        label.setAttribute('for', option.id);
        label.textContent = option.label;
        
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        groupElement.appendChild(checkboxDiv);
    });
}

// Initialise tous les composants de l'application
function initializeApp() {
    // Remplir les listes déroulantes et autres éléments avec les données de configuration
    populateSelectOptions('role', appConfig.roles);
    populateSelectOptions('taskType', appConfig.taskTypes);
    populateSelectOptions('detailLevel', appConfig.detailLevels);
    populateSelectOptions('responseFormat', appConfig.responseFormats);
    populateSelectOptions('audience', appConfig.audiences);
    populateSelectOptions('fileType', appConfig.fileTypes);
    
    // Initialiser les onglets des instructions méta
    initializeMetaTabs();
    
    // Remplir les outils techniques
    populateCheckboxGroup('toolsGroup', appConfig.tools);
    
    // Remplir les techniques avancées
    populateCheckboxGroup('advancedGroup', appConfig.advancedTechniques);
    
    // Initialiser la modal de sauvegarde
    initSaveModal();
    
    // Initialiser l'interface d'historique
    initHistoryInterface();
}

// Fonction pour initialiser les onglets des instructions méta
function initializeMetaTabs() {
    const tabsContainer = document.getElementById('metaTabs');
    const contentsContainer = document.getElementById('metaTabContents');
    
    if (!tabsContainer || !contentsContainer) return;
    
    // Nettoyer les conteneurs
    tabsContainer.innerHTML = '';
    contentsContainer.innerHTML = '';
    
    // Créer les onglets et les contenus
    appConfig.metaCategories.forEach((category, index) => {
        // Créer l'onglet
        const tab = document.createElement('div');
        tab.className = index === 0 ? 'tab active' : 'tab';
        tab.setAttribute('data-tab', category.id);
        tab.textContent = category.label;
        tabsContainer.appendChild(tab);
        
        // Créer le contenu de l'onglet
        const content = document.createElement('div');
        content.className = index === 0 ? 'tab-content active' : 'tab-content';
        content.id = `${category.id}-tab`;
        
        // Créer le groupe de cases à cocher pour cette catégorie
        const checkboxGroup = document.createElement('div');
        checkboxGroup.className = 'checkbox-group';
        
        category.options.forEach(option => {
            const checkboxItem = document.createElement('div');
            checkboxItem.className = 'checkbox-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = option.id;
            checkbox.value = option.value;
            
            const label = document.createElement('label');
            label.setAttribute('for', option.id);
            label.textContent = option.label;
            
            checkboxItem.appendChild(checkbox);
            checkboxItem.appendChild(label);
            checkboxGroup.appendChild(checkboxItem);
        });
        
        content.appendChild(checkboxGroup);
        contentsContainer.appendChild(content);
    });
    
    // Ajouter l'événement de clic pour les onglets
    document.querySelectorAll('#metaTabs .tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Désactiver tous les onglets et contenus
            document.querySelectorAll('#metaTabs .tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Activer l'onglet cliqué et son contenu
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// Configurer les écouteurs d'événements
function setupEventListeners() {
    // Gestion des sélections personnalisées
    document.getElementById('role').addEventListener('change', function() {
        const customRoleGroup = document.getElementById('customRoleGroup');
        customRoleGroup.style.display = this.value === 'custom' ? 'block' : 'none';
    });
    
    document.getElementById('taskType').addEventListener('change', function() {
        const customTaskGroup = document.getElementById('customTaskGroup');
        customTaskGroup.style.display = this.value === 'custom' ? 'block' : 'none';
    });
    
    document.getElementById('fileType').addEventListener('change', function() {
        const customFileTypeGroup = document.getElementById('customFileTypeGroup');
        customFileTypeGroup.style.display = this.value === 'custom' ? 'block' : 'none';
    });
    
    document.getElementById('exampleType').addEventListener('change', function() {
        const hasExample = this.value !== '';
        document.getElementById('exampleDescriptionGroup').style.display = hasExample ? 'block' : 'none';
        
        // Afficher/masquer les champs d'entrée-sortie selon le type d'exemple
        const showIO = this.value === 'input-output' || this.value === 'code';
        document.getElementById('exampleInputGroup').style.display = showIO ? 'block' : 'none';
        document.getElementById('exampleOutputGroup').style.display = showIO ? 'block' : 'none';
    });
    
    // Génération du prompt
    document.getElementById('generateBtn').addEventListener('click', generatePrompt);
    
    // Copier le prompt
    document.getElementById('copyBtn').addEventListener('click', function() {
        const promptResult = document.getElementById('promptResult');
        if (!promptResult.textContent) return;
        
        navigator.clipboard.writeText(promptResult.textContent)
            .then(() => {
                const toast = document.getElementById('toast');
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            })
            .catch(err => {
                showStatus("Erreur lors de la copie du prompt: " + err, true);
            });
    });
    
    // Sauvegarder le prompt
    document.getElementById('saveBtn').addEventListener('click', function() {
        const promptText = document.getElementById('promptResult').textContent;
        if (!promptText) {
            showStatus("Veuillez d'abord générer un prompt à sauvegarder", true);
            return;
        }
        
        // Afficher la modal de sauvegarde
        document.getElementById('saveModal').style.display = 'flex';
        document.getElementById('promptTitle').focus();
    });
    
    // Fermer la modal
    document.getElementById('cancelSaveBtn').addEventListener('click', function() {
        document.getElementById('saveModal').style.display = 'none';
        document.getElementById('promptTitle').value = '';
        document.getElementById('promptNote').value = '';
    });
    
    // Confirmer la sauvegarde
    document.getElementById('confirmSaveBtn').addEventListener('click', savePrompt);
    
    // Gérer la liste des prompts sauvegardés
    document.getElementById('showSavedBtn').addEventListener('click', function() {
        document.getElementById('savedPromptsModal').style.display = 'flex';
        renderSavedPrompts();
    });
    
    // Fermer la modal des prompts sauvegardés
    document.getElementById('closeSavedPromptsBtn').addEventListener('click', function() {
        document.getElementById('savedPromptsModal').style.display = 'none';
    });
    
    // Gérer l'historique
    document.getElementById('showHistoryBtn').addEventListener('click', function() {
        document.getElementById('historyModal').style.display = 'flex';
        renderHistoryList();
    });
    
    document.getElementById('closeHistoryBtn').addEventListener('click', function() {
        document.getElementById('historyModal').style.display = 'none';
    });
    
    document.getElementById('clearHistoryBtn').addEventListener('click', clearHistory);
}

// Fonction pour initialiser la modal de sauvegarde
function initSaveModal() {
    // Créer la modal de sauvegarde si elle n'existe pas
    if (!document.getElementById('saveModal')) {
        const saveModal = document.createElement('div');
        saveModal.id = 'saveModal';
        saveModal.className = 'modal';
        saveModal.innerHTML = `
            <div class="modal-content">
                <h3>Sauvegarder ce prompt</h3>
                <div class="form-group">
                    <label for="promptTitle">Titre</label>
                    <input type="text" id="promptTitle" placeholder="Donnez un titre à ce prompt...">
                </div>
                <div class="form-group">
                    <label for="promptNote">Note (optionnelle)</label>
                    <textarea id="promptNote" rows="4" placeholder="Ajoutez une note ou des commentaires..."></textarea>
                </div>
                <div class="modal-actions">
                    <button id="cancelSaveBtn">Annuler</button>
                    <button id="confirmSaveBtn" class="primary-btn">Sauvegarder</button>
                </div>
            </div>
        `;
        document.body.appendChild(saveModal);
    }
    
    // Créer la modal des prompts sauvegardés si elle n'existe pas
    if (!document.getElementById('savedPromptsModal')) {
        const savedPromptsModal = document.createElement('div');
        savedPromptsModal.id = 'savedPromptsModal';
        savedPromptsModal.className = 'modal';
        savedPromptsModal.innerHTML = `
            <div class="modal-content wide-modal">
                <div class="modal-header">
                    <h3>Prompts sauvegardés</h3>
                    <button id="closeSavedPromptsBtn" class="close-btn">&times;</button>
                </div>
                <div id="savedPromptsList" class="saved-prompts-list">
                    <!-- Liste des prompts sauvegardés -->
                </div>
            </div>
        `;
        document.body.appendChild(savedPromptsModal);
    }
}

// Fonction pour initialiser l'interface d'historique
function initHistoryInterface() {
    // Créer la modal d'historique si elle n'existe pas
    if (!document.getElementById('historyModal')) {
        const historyModal = document.createElement('div');
        historyModal.id = 'historyModal';
        historyModal.className = 'modal';
        historyModal.innerHTML = `
            <div class="modal-content wide-modal">
                <div class="modal-header">
                    <h3>Historique des prompts générés</h3>
                    <button id="closeHistoryBtn" class="close-btn">&times;</button>
                </div>
                <div class="modal-actions" style="justify-content: flex-start; margin-bottom: 15px;">
                    <button id="clearHistoryBtn" class="danger-btn">Effacer l'historique</button>
                </div>
                <div id="historyList" class="history-list">
                    <!-- Liste des prompts de l'historique -->
                </div>
            </div>
        `;
        document.body.appendChild(historyModal);
        
        // Ajouter les écouteurs d'événements pour la modal d'historique
        document.getElementById('closeHistoryBtn').addEventListener('click', function() {
            document.getElementById('historyModal').style.display = 'none';
        });
        
        document.getElementById('clearHistoryBtn').addEventListener('click', clearHistory);
    }
}

// Fonction pour générer le prompt basé sur les entrées utilisateur
function generatePrompt() {
    // Récupérer les valeurs des champs
    const role = document.getElementById('role').value === 'custom' 
        ? document.getElementById('customRole').value 
        : document.getElementById('role').value;
    
    const taskType = document.getElementById('taskType').value === 'custom'
        ? document.getElementById('customTask').value
        : document.getElementById('taskType').value;
    
    const taskDescription = document.getElementById('taskDescription').value;
    
    // Vérifier si les champs obligatoires sont remplis
    if (!role || !taskDescription) {
        showStatus("Veuillez remplir tous les champs obligatoires", true);
        return;
    }
    
    // Construire le prompt de base
    let promptText = `${role}\n\n le type de tache à réaliser est :  ${taskType}.\n\n Le detail de la tache est : ${taskDescription}\n\n `;
    
    // Ajouter les informations sur le fichier si applicable
    const fileType = document.getElementById('fileType').value;
    if (fileType && fileType !== "") {
        const customFileType = document.getElementById('customFileType').value;
        const fileTypeText = fileType === 'custom' ? customFileType : fileType;
        const fileDescription = document.getElementById('fileDescription').value;
        
        promptText += `Je travaille avec un fichier ${fileTypeText}`;
        if (fileDescription) {
            promptText += ` qui ${fileDescription}`;
        }
        promptText += `.\n\n`;
    }
    
    // Collecter les instructions méta sélectionnées
    const selectedMetaInstructions = [];
    appConfig.metaCategories.forEach(category => {
        category.options.forEach(option => {
            const checkbox = document.getElementById(option.id);
            if (checkbox && checkbox.checked) {
                selectedMetaInstructions.push(option.value);
            }
        });
    });
    
    // Ajouter les instructions méta
    if (selectedMetaInstructions.length > 0) {
        promptText += "Instructions méta:\n";
        selectedMetaInstructions.forEach(instruction => {
            promptText += `- ${instruction}\n`;
        });
        promptText += "\n";
    }
    
    // Collecter les outils techniques sélectionnés
    const selectedTools = [];
    appConfig.tools.forEach(tool => {
        const checkbox = document.getElementById(tool.id);
        if (checkbox && checkbox.checked) {
            selectedTools.push(tool.value);
        }
    });
    
    // Ajouter les outils techniques
    if (selectedTools.length > 0) {
        promptText += "Les outils techniques à utiliser:\n";
        selectedTools.forEach(tool => {
            promptText += `- ${tool}\n`;
        });
        promptText += "\n";
    }
    
    // Ajouter le niveau de détail
    const detailLevel = document.getElementById('detailLevel').value;
    if (detailLevel) {
        promptText += `${detailLevel}\n\n`;
    }
    
    // Ajouter le format de réponse
    const responseFormat = document.getElementById('responseFormat').value;
    if (responseFormat) {
        promptText += `${responseFormat}\n\n`;
    }
    
    // Ajouter l'audience cible
    const audience = document.getElementById('audience').value;
    if (audience) {
        promptText += `${audience}\n\n`;
    }
    
    // Collecter les techniques avancées sélectionnées
    const selectedAdvanced = [];
    appConfig.advancedTechniques.forEach(technique => {
        const checkbox = document.getElementById(technique.id);
        if (checkbox && checkbox.checked) {
            selectedAdvanced.push(technique.value);
        }
    });
    
    // Ajouter les techniques avancées
    if (selectedAdvanced.length > 0) {
        promptText += "Techniques spécifiques à appliquer:\n";
        selectedAdvanced.forEach(technique => {
            promptText += `- ${technique}\n`;
        });
        promptText += "\n";
    }
    
    // Ajouter l'exemple si applicable
    const exampleType = document.getElementById('exampleType').value;
    if (exampleType && exampleType !== "") {
        promptText += "Exemple de référence:\n";
        
        const exampleDescription = document.getElementById('exampleDescription').value;
        if (exampleDescription) {
            promptText += `${exampleDescription}\n\n`;
        }
        
        if (exampleType === 'input-output' || exampleType === 'code') {
            const exampleInput = document.getElementById('exampleInput').value;
            const exampleOutput = document.getElementById('exampleOutput').value;
            
            if (exampleInput) {
                promptText += `Entrée:\n${exampleInput}\n\n`;
            }
            
            if (exampleOutput) {
                promptText += `Sortie:\n${exampleOutput}\n\n`;
            }
        }
    }
    
    // Afficher le prompt généré
    document.getElementById('promptResult').textContent = promptText;
    
    // Ajouter à l'historique
    addToHistory(promptText);
}

// Fonction pour ajouter un prompt à l'historique
function addToHistory(promptText) {
    // Récupérer l'historique existant
    let history = JSON.parse(localStorage.getItem('promptHistory') || '[]');
    
    // Ajouter le nouveau prompt
    history.push({
        prompt: promptText,
        date: new Date().toISOString()
    });
    
    // Limiter la taille de l'historique (par exemple, conserver les 20 derniers prompts)
    if (history.length > 20) {
        history = history.slice(history.length - 20);
    }
    
    // Sauvegarder l'historique mis à jour
    localStorage.setItem('promptHistory', JSON.stringify(history));
    
    // Mettre à jour le compteur d'historique
    updateHistoryCounter();
}

// Fonction pour mettre à jour le compteur d'historique
function updateHistoryCounter() {
    const history = JSON.parse(localStorage.getItem('promptHistory') || '[]');
    const counter = document.getElementById('historyCounter');
    
    if (history.length > 0) {
        counter.textContent = history.length;
        counter.style.display = 'flex';
    } else {
        counter.style.display = 'none';
    }
}

// Fonction pour rendre la liste d'historique
function renderHistoryList() {
    const historyList = document.getElementById('historyList');
    if (!historyList) return;
    
    // Récupérer l'historique
    const history = JSON.parse(localStorage.getItem('promptHistory') || '[]');
    
    // Vider la liste
    historyList.innerHTML = '';
    
    // Afficher un message si l'historique est vide
    if (history.length === 0) {
        historyList.innerHTML = '<p>Aucun prompt dans l\'historique.</p>';
        return;
    }
    
    // Rendre chaque élément d'historique
    history.forEach((item, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const date = new Date(item.date);
        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        
        historyItem.innerHTML = `
            <div class="date">${formattedDate}</div>
            <div class="prompt-text">${item.prompt}</div>
            <div class="card-actions">
                <button class="card-btn use-history-btn" data-index="${index}">Utiliser</button>
                <button class="card-btn delete-history-btn" data-index="${index}">Supprimer</button>
            </div>
        `;
        
        historyList.appendChild(historyItem);
    });
    
    // Ajouter les écouteurs d'événements
    document.querySelectorAll('.use-history-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const history = JSON.parse(localStorage.getItem('promptHistory') || '[]');
            if (history[index]) {
                document.getElementById('promptResult').textContent = history[index].prompt;
                document.getElementById('historyModal').style.display = 'none';
            }
        });
    });
    
    document.querySelectorAll('.delete-history-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const history = JSON.parse(localStorage.getItem('promptHistory') || '[]');
            history.splice(index, 1);
            localStorage.setItem('promptHistory', JSON.stringify(history));
            renderHistoryList();
            updateHistoryCounter();
        });
    });
}

// Fonction pour effacer l'historique
function clearHistory() {
    if (confirm('Êtes-vous sûr de vouloir effacer tout l\'historique ?')) {
        localStorage.removeItem('promptHistory');
        renderHistoryList();
        updateHistoryCounter();
        showStatus("Historique effacé avec succès", false);
    }
}

// Fonction pour sauvegarder un prompt
function savePrompt() {
    const promptText = document.getElementById('promptResult').textContent;
    const title = document.getElementById('promptTitle').value;
    const note = document.getElementById('promptNote').value;
    
    if (!promptText || !title) {
        showStatus("Veuillez entrer un titre pour le prompt", true);
        return;
    }
    
    // Récupérer les prompts sauvegardés
    let savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
    
    // Ajouter le nouveau prompt
    savedPrompts.push({
        title: title,
        prompt: promptText,
        note: note,
        date: new Date().toISOString()
    });
    
    // Sauvegarder les prompts mis à jour
    localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
    
    // Fermer la modal
    document.getElementById('saveModal').style.display = 'none';
    document.getElementById('promptTitle').value = '';
    document.getElementById('promptNote').value = '';
    
    showStatus("Prompt sauvegardé avec succès", false);
}

// Fonction pour charger les prompts sauvegardés
function loadSavedPrompts() {
    // Mettre à jour le compteur d'historique au chargement
    updateHistoryCounter();
}

// Fonction pour rendre les prompts sauvegardés
function renderSavedPrompts() {
    const savedPromptsList = document.getElementById('savedPromptsList');
    if (!savedPromptsList) return;
    
    // Récupérer les prompts sauvegardés
    const savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
    
    // Vider la liste
    savedPromptsList.innerHTML = '';
    
    // Afficher un message si aucun prompt n'est sauvegardé
    if (savedPrompts.length === 0) {
        savedPromptsList.innerHTML = '<p>Aucun prompt sauvegardé.</p>';
        return;
    }
    
    // Rendre chaque prompt sauvegardé
    savedPrompts.forEach((item, index) => {
        const promptCard = document.createElement('div');
        promptCard.className = 'prompt-card';
        
        const date = new Date(item.date);
        const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        
        promptCard.innerHTML = `
            <h4>${item.title}</h4>
            <button class="delete-btn" data-index="${index}">&times;</button>
            <div class="date">${formattedDate}</div>
            ${item.note ? `<div class="note">${item.note}</div>` : ''}
            <div class="prompt-text">${item.prompt}</div>
            <div class="card-actions">
                <button class="card-btn use-prompt-btn" data-index="${index}">Utiliser</button>
                <button class="card-btn edit-prompt-btn" data-index="${index}">Modifier</button>
            </div>
        `;
        
        savedPromptsList.appendChild(promptCard);
    });
    
    // Ajouter les écouteurs d'événements
    document.querySelectorAll('.use-prompt-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
            if (savedPrompts[index]) {
                document.getElementById('promptResult').textContent = savedPrompts[index].prompt;
                document.getElementById('savedPromptsModal').style.display = 'none';
            }
        });
    });
    
    document.querySelectorAll('.edit-prompt-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Fonctionnalité d'édition - à implémenter si nécessaire
            showStatus("Fonctionnalité d'édition à implémenter", true);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            if (confirm('Êtes-vous sûr de vouloir supprimer ce prompt ?')) {
                const savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
                savedPrompts.splice(index, 1);
                localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
                renderSavedPrompts();
            }
        });
    });
}