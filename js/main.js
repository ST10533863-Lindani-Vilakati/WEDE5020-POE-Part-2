document.addEventListener('DOMContentLoaded', function () {

    /* ---------- 1. ACCORDION (Services page) ---------- */
    const accordionButtons = document.querySelectorAll('.accordion-btn');

    accordionButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const item = this.parentElement;
            const content = item.querySelector('.accordion-content');
            const isOpen = item.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.accordion-item').forEach(function (other) {
                other.classList.remove('active');
                other.querySelector('.accordion-content').style.maxHeight = null;
            });

            // Toggle current
            if (!isOpen) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    const searchInput = document.getElementById('serviceSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceItems = document.querySelectorAll('.service-item');

    function filterServices() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';

        serviceItems.forEach(function (item) {
            const title = item.querySelector('h3, .accordion-btn') ? 
                (item.querySelector('h3') || item.querySelector('.accordion-btn')).textContent.toLowerCase() : '';
            const text = item.textContent.toLowerCase();
            const category = item.dataset.category;

            const matchesSearch = title.includes(searchTerm) || text.includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || category === activeFilter;

            item.style.display = (matchesSearch && matchesFilter) ? 'block' : 'none';
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterServices);
    }

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterServices();
        });
    });

    function showError(input, message) {
        const formGroup = input.closest('.form-group') || input.parentElement;
        let error = formGroup.querySelector('.error-message');

        if (!error) {
            error = document.createElement('span');
            error.className = 'error-message';
            formGroup.appendChild(error);
        }

        error.textContent = message;
        input.classList.add('invalid');
    }

    function clearError(input) {
        const formGroup = input.closest('.form-group') || input.parentElement;
        const error = formGroup.querySelector('.error-message');
        if (error) error.remove();
        input.classList.remove('invalid');
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
        return /^(\+27|0)[6-8][0-9]{8}$/.test(phone.replace(/\s/g, ''));
    }

    // ENQUIRY FORM
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const message = document.getElementById('message');
            const enquiryType = document.querySelector('input[name="enquiryType"]:checked');

            [fullName, email, phone, message].forEach(clearError);

            if (!fullName.value.trim() || fullName.value.trim().length < 2) {
                showError(fullName, 'Please enter your full name (at least 2 characters).');
                isValid = false;
            }

            if (!email.value.trim() || !validateEmail(email.value.trim())) {
                showError(email, 'Please enter a valid email address.');
                isValid = false;
            }

            if (phone.value.trim() && !validatePhone(phone.value.trim())) {
                showError(phone, 'Please enter a valid South African phone number (e.g. 082 123 4567).');
                isValid = false;
            }

            if (!enquiryType) {
                alert('Please select how we can help you.');
                isValid = false;
            }

            if (!message.value.trim() || message.value.trim().length < 10) {
                showError(message, 'Please enter a message of at least 10 characters.');
                isValid = false;
            }

            if (isValid) {
                enquiryForm.style.display = 'none';
                const success = document.createElement('div');
                success.className = 'form-success';
                success.innerHTML = `
                    <h3>Thank you!</h3>
                    <p>Your enquiry has been received. We will contact you within 2 working days.</p>
                    <p><strong>Reference:</strong> HH-${Date.now().toString().slice(-6)}</p>
                `;
                enquiryForm.parentElement.appendChild(success);
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('contactName');
            const email = document.getElementById('contactEmail');
            const subject = document.getElementById('contactSubject');
            const message = document.getElementById('contactMessage');

            [name, email, subject, message].forEach(clearError);

            if (!name.value.trim() || name.value.trim().length < 2) {
                showError(name, 'Please enter your name.');
                isValid = false;
            }

            if (!email.value.trim() || !validateEmail(email.value.trim())) {
                showError(email, 'Please enter a valid email address.');
                isValid = false;
            }

            if (!subject.value) {
                showError(subject, 'Please select a subject.');
                isValid = false;
            }

            if (!message.value.trim() || message.value.trim().length < 10) {
                showError(message, 'Please enter a message of at least 10 characters.');
                isValid = false;
            }

            if (isValid) {
                contactForm.style.display = 'none';
                const success = document.createElement('div');
                success.className = 'form-success';
                success.innerHTML = `
                    <h3>Message Sent!</h3>
                    <p>Thank you for contacting Hope Harvest. We will reply to <strong>${email.value}</strong> soon.</p>
                `;
                contactForm.parentElement.appendChild(success);
            }
        });
    }

    const mapContainer = document.getElementById('map');
    if (mapContainer && typeof L !== 'undefined') {
        const map = L.map('map').setView([-26.195246, 28.034088], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const locations = [
            {
                name: 'Brixton Hub (Main Kitchen)',
                coords: [-26.1925, 27.9968],
                description: '123 High Street, Brixton<br>Mon–Fri 11:00 – 14:00'
            },
            {
                name: 'Yeoville Community Centre',
                coords: [-26.1815, 28.0605],
                description: '45 Raleigh Street, Yeoville<br>Mon–Fri 12:00 – 14:30'
            },
            {
                name: 'Alexandra Outreach Point',
                coords: [-26.1036, 28.0964],
                description: '78 2nd Avenue, Alexandra<br>Tue & Thu 11:30 – 13:30'
            }
        ];

        locations.forEach(function (loc) {
            L.marker(loc.coords)
                .addTo(map)
                .bindPopup(`<strong>${loc.name}</strong><br>${loc.description}`);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});