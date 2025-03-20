const plantData = {
    lavender: {
        name: 'Lavender',
        scientific: 'Lavandula angustifolia',
        embedCode: '<div class="model" style="width: 60vw; height: 50vh">' +
        '<model-viewer' +
        '  alt="Lavender Plant 3D Model"' +
        '  src="/lavender.glb"' +
        '  style="width: 100%; height: 100%;"' +
        '  ar' +
        '  poster=""' +
        '  shadow-intensity="1"' +
        '  camera-controls' +
        '  touch-action="pan-y">' +
        '</model-viewer>' +
        '</div>',
        benefits: [
            'Reduces anxiety and stress',
            'Improves sleep quality',
            'Natural antiseptic',
            'Helps with headaches'
        ],
        growing: 'Lavender needs full sun and well-draining soil. Plant in spring, spacing plants 12 to 18 inches apart. Water deeply but infrequently once established.',
        uses: 'Traditionally used in aromatherapy, as a sleep aid, and for its calming properties. The essential oil can be used for minor burns and insect bites.'
    },
    echinacea: {
        name: 'Neem',
        scientific: 'Azadirachta indica',
        embedCode: '<div class="model" style="width: 60vw; height: 50vh">' +
        '<model-viewer' +
        '  alt="Neem plant 3D model"' +
        '  src="/neemCompressed.glb"' +
        '  style="width: 100%; height: 100%;"' +
        '  ar' +
        '  poster=""' +
        '  shadow-intensity="1"' +
        '  camera-controls' +
        '  touch-action="pan-y">' +
        '</model-viewer>' +
        '</div>',
        benefits: [
            'Neem strengthens the immune system and fights infections.',
            'It helps treat acne, eczema, and other skin conditions.',
            'Neem aids in removing toxins and purifying the blood.',
            'It prevents gum disease and tooth decay.'
        ],
        growing: 'Neem trees require a warm climate with plenty of sunlight and well-drained soil. They are drought-tolerant and thrive in tropical and subtropical regions.',
        uses: 'Commonly used to prevent and treat the common cold, flu, and other infections. Also used to boost immune system function.'
    },
    chamomile: {
        name: 'Alovera',
        scientific: 'Aloe barbadensis Miller',
        embedCode: '<div class="model" style="width: 60vw; height: 50vh">' +
        '<model-viewer' +
        '  alt="Alovera plant 3D model"' +
        '  src="/alovera.glb"' +
        '  style="width: 100%; height: 100%;"' +
        '  ar' +
        '  poster=""' +
        '  shadow-intensity="1"' +
        '  camera-controls' +
        '  touch-action="pan-y">' +
        '</model-viewer>' +
        '</div>',
        benefits: [
            'Aloe vera helps calm sunburns and skin irritation.',
            'It deeply moisturizes and nourishes the skin.',
            'Aloe vera aids in improving digestive health.',
            ' It accelerates the healing of cuts and minor burns.'

        ],
        growing: 'Aloe vera requires well-drained soil and plenty of sunlight, ideally 6-8 hours a day. It thrives in warm climates with minimal watering, allowing the soil to dry between sessions.',
        uses: 'Aloe vera is widely used in skincare for soothing burns, moisturizing, and reducing acne. It is also consumed for its digestive benefits and immune-boosting properties.'
    },
    mint: {
        name: 'Tulsi',
        scientific: 'MenthaOcimum tenuiflorum',
        embedCode: '<div class="model" style="width: 60vw; height: 50vh">' +
        '<model-viewer' +
        '  alt="Tulsi plant 3D model"' +
        '  src="/tulsi.glb"' +
        '  style="width: 100%; height: 100%;"' +
        '  ar' +
        '  poster=""' +
        '  shadow-intensity="1"' +
        '  camera-controls' +
        '  touch-action="pan-y">' +
        '</model-viewer>' +
        '</div>',
        benefits: [
            'Improves immune system',
            'It has adaptogenic properties that help in managing stress and anxiety.',
            'Tulsi aids in digestion and relieves bloating or indigestion.',
            'It helps in treating respiratory issues like asthma and coughs.'
        ],
        growing: 'Tulsi requires well-drained soil and plenty of sunlight, ideally 4-6 hours a day. It thrives in warm temperatures with regular watering but should not be overwatered.',
        uses: 'Tulsi is used in traditional medicine for boosting immunity, treating respiratory issues, and reducing stress. Its leaves are also used in skincare, hair care, and as a natural antimicrobial agent.'
    }
};

// Update the popup functionality
document.querySelectorAll('.plant-card').forEach(card => {
    const button = card.querySelector('.learn-more-btn');
    if (button) {
        button.addEventListener('click', () => {
            const plantId = card.dataset.id;
            const plant = plantData[plantId];
            
            if (plant) {
                // Replace image with embed code
                const popupHeader = document.querySelector('.popup-header');
                if (plant.embedCode) {
                    // If embedCode exists, use it
                    document.getElementById('popup-image').style.display = 'none';
                    const embedWrapper = document.createElement('div');
                    embedWrapper.className = 'sketchfab-embed-wrapper';
                    embedWrapper.innerHTML = plant.embedCode;
                    popupHeader.insertBefore(embedWrapper, document.getElementById('popup-title'));
                } else {
                    // Fallback to image if no embedCode
                    document.getElementById('popup-image').style.display = 'block';
                    document.getElementById('popup-image').src = plant.image;
                }

                // Rest of the popup content
                document.getElementById('popup-title').textContent = plant.name;
                document.getElementById('popup-scientific').textContent = plant.scientific;
                
                const benefitsList = document.getElementById('popup-benefits');
                benefitsList.innerHTML = '';
                plant.benefits.forEach(benefit => {
                    const li = document.createElement('li');
                    li.textContent = benefit;
                    benefitsList.appendChild(li);
                });
                
                document.getElementById('popup-growing').textContent = plant.growing;
                document.getElementById('popup-uses').textContent = plant.uses;
                
                document.getElementById('plantPopup').style.display = 'block';
            }
        });
    }
});

// Add cleanup when closing popup
function cleanupPopup() {
    const embedWrapper = document.querySelector('.popup-header .sketchfab-embed-wrapper');
    if (embedWrapper) {
        embedWrapper.remove();
    }
    document.getElementById('popup-image').style.display = 'block';
}

document.querySelector('.close-popup').addEventListener('click', function() {
    cleanupPopup();
    document.getElementById('plantPopup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const popup = document.getElementById('plantPopup');
    if (event.target === popup) {
        cleanupPopup();
        popup.style.display = 'none';
    }
});



