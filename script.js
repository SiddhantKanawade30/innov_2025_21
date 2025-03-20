const plantData = {
    lavender: {
        name: 'Lavender',
        scientific: 'Lavandula angustifolia',
        image: 'assets/lavender.jpg',
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
        name: 'Echinacea',
        scientific: 'Echinacea purpurea',
        image: 'assets/echinacea.jpg',
        benefits: [
            'Boosts immune system',
            'Reduces inflammation',
            'Helps fight infections',
            'May reduce cold symptoms'
        ],
        growing: 'Plant in full sun to part shade. Well-draining soil is essential. Space plants 18 to 24 inches apart. Drought tolerant once established.',
        uses: 'Commonly used to prevent and treat the common cold, flu, and other infections. Also used to boost immune system function.'
    },
    chamomile: {
        name: 'Chamomile',
        scientific: 'Matricaria chamomilla',
        image: 'assets/chamomile.jpg',
        benefits: [
            'Promotes better sleep',
            'Aids digestion',
            'Reduces stress and anxiety',
            'Anti-inflammatory properties'
        ],
        growing: 'Prefers full sun to partial shade. Plant in well-draining soil. Space plants 8 to 12 inches apart. Water regularly until established.',
        uses: 'Commonly used as a calming tea, for digestive issues, and as a mild sleep aid. Also used topically for skin conditions.'
    },
    mint: {
        name: 'Mint',
        scientific: 'Mentha',
        image: 'assets/mint.jpg',
        benefits: [
            'Improves digestion',
            'Freshens breath',
            'Relieves nausea',
            'Helps with respiratory issues'
        ],
        growing: 'Grows well in partial shade to full sun. Keep soil moist but not waterlogged. Plant in containers to prevent spreading. Very easy to grow.',
        uses: 'Used in teas for digestive aid, breath freshening, and respiratory support. Essential oil used for headache relief and aromatherapy.'
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
                document.getElementById('popup-image').src = plant.image;
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

// Fix close button functionality
document.querySelector('.close-popup').addEventListener('click', function() {
    document.getElementById('plantPopup').style.display = 'none';
});

// Close on outside click
window.addEventListener('click', function(event) {
    const popup = document.getElementById('plantPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});



