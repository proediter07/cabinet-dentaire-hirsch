/**
 * Internationalization (i18n) Engine for Cabinet Dentaire Dr. Shandy Hirsch
 * Supports dynamic instant switching between English (EN) and French (FR)
 */
(function() {
    var translations = {
        en: {
            "nav_home": "Home",
            "nav_about": "About Us",
            "nav_services": "Services",
            "nav_blog": "Blog",
            "nav_contact": "Contact",
            "nav_book": "Book Online",
            "nav_call": "Call: +352 20 28 75 54",
            
            "hero_badge": "⭐ 5.0 Google Rating • Over 1,000+ Happy Patients",
            "hero_title": "Gentle, High-End Dental Care in Luxembourg",
            "hero_desc": "Welcome to Cabinet Dentaire Dr. Shandy Hirsch in Bonnevoie. Specialized in Oral Implantology, Periodontology, and Aesthetic Smile Design in a calm, stress-free setting.",
            "hero_cta_book": "Book Appointment on Doctena",
            "hero_cta_services": "Explore Specialties",
            
            "lead_head": "Request a callback",
            "lead_sub": "No spam. A real team member calls you back, fast.",
            "lead_name_ph": "Your Name",
            "lead_phone_ph": "Phone Number",
            "lead_btn": "Request Callback",
            "lead_success": "Thank you! Dr. Hirsch's team will contact you shortly.",
            
            "feature_gentle_title": "Gentle & Anti-Fear Dentistry",
            "feature_gentle_desc": "Terrified of the dentist? Dr. Hirsch is celebrated for her gentle touch, active listening, and calm atmosphere.",
            
            "feature_tech_title": "German Precision Equipment",
            "feature_tech_desc": "High-end Fauteuil Ergonomique Haute Technologie dental treatment center and Haute Précision surgical loupes for microscopic precision.",
            
            "feature_implant_title": "Oral Implantology & Periodontics",
            "feature_implant_desc": "University of Rennes 2-year hospital surgical residency training. Specialized in tooth replacement and gum health.",
            
            "about_doctor_badge": "Lead Dental Surgeon",
            "about_doctor_title": "Dr. Shandy Hirsch",
            "about_doctor_subtitle": "Chirurgien-Dentiste • Specialist in Implantology & Periodontology",
            "about_doctor_bio": "Graduated in Dental Medicine with advanced University Diplomas from the prestigious Universities of Rennes, Paris, Toulouse, and Côte d'Azur. Known for her gentle touch, radiant warmth, and patient-first approach.",
            
            "specialties_title": "Our Clinical Specialties",
            "spec_1_title": "Oral Implantology",
            "spec_1_desc": "Permanent tooth replacement, single implants, implant bridges, and full overdentures.",
            "spec_2_title": "Periodontology & Gum Care",
            "spec_2_desc": "Advanced diagnosis and non-surgical/surgical treatment for bleeding gums, bone preservation, and tissue grafting.",
            "spec_3_title": "Cosmetic Smile Design",
            "spec_3_desc": "Custom ceramic veneers, gentle professional whitening, and natural aesthetic restorations.",
            "spec_4_title": "Preventive & General Dentistry",
            "spec_4_desc": "Gentle ultrasonic cleaning, oral exams, tooth-colored restorations, and pediatric dental care.",
            "spec_5_title": "Dental Emergencies",
            "spec_5_desc": "Dedicated daily emergency slots reserved for severe toothache, infections, or trauma.",
            
            "hours_title": "Opening Hours",
            "hours_mon_thu": "Mon – Thu: 08:30 – 17:30",
            "hours_fri": "Friday: 08:30 – 12:30",
            "hours_sat": "Saturday: 09:30 – 14:00 (1 Saturday per month, on appointment)",
            "hours_sun": "Sunday: Closed",
            
            "location_title": "Location & Access",
            "address_val": "12, rue William Turner, L-2634 Luxembourg-Bonnevoie",
            "transit_desc": "Bus 2 (Arrêt Demy Schlechter), Bus 7 (Arrêt Vannérus), Bus 29 (Arrêt Hippodrome). 5 minutes from Gare Centrale.",
            
            "reviews_title": "What Our Patients Say",
            "review_1_text": "Dr. Hirsch is incredibly gentle and attentive. I used to be terrified of the dentist, but she takes all the stress away.",
            "review_1_author": "Google Review ⭐ 5.0",
            "review_2_text": "Spotless clinic, warm welcome, punctual and very gentle in her treatments. Absolutely the best dentist in Luxembourg.",
            "review_2_author": "Verified Patient (Bonnevoie)",
            "review_3_text": "Remarkable listening and crystal-clear explanations at every step. You immediately feel safe and in good hands.",
            "review_3_author": "Doctena Recommendation (+1,000 reviews)",
            
            "footer_tagline": "Advanced technology, gentle touch, and comprehensive care to keep your smile healthy for life.",
            "footer_rights": "Cabinet Dentaire Dr. Shandy Hirsch. All rights reserved."
        },
        fr: {
            "nav_home": "Accueil",
            "nav_about": "Le Cabinet",
            "nav_services": "Soins & Spécialités",
            "nav_blog": "Actualités",
            "nav_contact": "Contact & Accès",
            "nav_book": "Prendre RDV",
            "nav_call": "Tél : +352 20 28 75 54",
            
            "hero_badge": "⭐ Note 5.0 Google • Plus de 1 000 Avis Patients",
            "hero_title": "Soins Dentaires d'Excellence & Douceur à Luxembourg",
            "hero_desc": "Bienvenue au Cabinet Dentaire Dr. Shandy Hirsch à Bonnevoie. Spécialiste diplômée des Universités de Paris et Rennes en Parodontologie, Implantologie et Dentisterie Esthétique.",
            "hero_cta_book": "Prendre Rendez-vous sur Doctena",
            "hero_cta_services": "Découvrir les Spécialités",
            
            "lead_head": "Demander à être rappelé",
            "lead_sub": "Sans engagement. Notre équipe vous rappelle rapidement.",
            "lead_name_ph": "Votre Nom",
            "lead_phone_ph": "Numéro de Téléphone",
            "lead_btn": "Être Rappelé",
            "lead_success": "Merci ! L'équipe du Dr. Hirsch vous contactera dans les plus brefs délais.",
            
            "feature_gentle_title": "Dentisterie Douce & Anti-Peur",
            "feature_gentle_desc": "Appréhendez-vous le dentiste ? Le Dr. Hirsch est réputée pour sa douceur, son écoute bienveillante et son approche apaisante.",
            
            "feature_tech_title": "Plateau Technique de Pointe",
            "feature_tech_desc": "Unité de soins haute technologie Fauteuil Ergonomique Haute Technologie et loupes chirurgicales Haute Précision pour une précision microscopique.",
            
            "feature_implant_title": "Implantologie & Parodontologie",
            "feature_implant_desc": "Diplômée d'un D.U. d'Implantologie de 2 ans au CHU de Rennes et de certificats en parodontologie de l'Université de Paris.",
            
            "about_doctor_badge": "Chirurgien-Dentiste",
            "about_doctor_title": "Dr. Shandy Hirsch",
            "about_doctor_subtitle": "Médecin-Dentiste • Spécialiste en Parodontologie & Implantologie",
            "about_doctor_bio": "Diplômée en Médecine Dentaire avec spécialisations universitaires approfondies à Rennes, Paris, Toulouse et Côte d'Azur. Reconnue pour sa douceur, son accueil chaleureux et son professionnalisme.",
            
            "specialties_title": "Nos Pôles d'Expertise",
            "spec_1_title": "Implantologie Orale",
            "spec_1_desc": "Remplacement dentaire unitaire, bridges sur implants et prothèses complètes supra-implantaires.",
            "spec_2_title": "Parodontologie & Soins des Gencives",
            "spec_2_desc": "Diagnostic approfondi, traitement des déchaussements, assainissement et greffes pour préserver vos dents naturelles.",
            "spec_3_title": "Dentisterie Esthétique",
            "spec_3_desc": "Facettes céramiques sur-mesure, éclaircissement professionnel doux et réhabilitation harmonieuse du sourire.",
            "spec_4_title": "Omnipratique & Prévention",
            "spec_4_desc": "Détartrage doux aux ultrasons, bilans complets, soins conservateurs et prise en charge des enfants.",
            "spec_5_title": "Urgences Dentaires",
            "spec_5_desc": "Créneaux dédiés réservés chaque jour en semaine pour le traitement rapide des douleurs aiguës et traumatismes.",
            
            "hours_title": "Horaires d'Ouverture",
            "hours_mon_thu": "Lundi au Jeudi : 08h30 – 17h30",
            "hours_fri": "Vendredi : 08h30 – 12h30",
            "hours_sat": "Samedi : 09h30 – 14h00 (1 samedi par mois sur RDV)",
            "hours_sun": "Dimanche : Fermé",
            
            "location_title": "Localisation & Accès",
            "address_val": "12, rue William Turner, L-2634 Luxembourg – Bonnevoie",
            "transit_desc": "Ligne 2 (Arrêt Demy Schlechter), Ligne 7 (Arrêt Vannérus), Ligne 29 (Arrêt Hippodrome). À 5 min de la Gare Centrale.",
            
            "reviews_title": "Ce que disent nos patients",
            "review_1_text": "Le Dr. Hirsch est incroyablement douce et attentive. J'avais une peur panique du dentiste, mais elle a effacé tout mon stress.",
            "review_1_author": "Avis Google ⭐ 5.0",
            "review_2_text": "Cabinet très propre, accueil chaleureux, ponctuelle et particulièrement douce dans ses soins.",
            "review_2_author": "Avis Patient Vérifié (Bonnevoie)",
            "review_3_text": "Une écoute remarquable et des explications limpides à chaque étape. On se sent tout de suite entre de bonnes mains.",
            "review_3_author": "Recommandation Doctena (+1 000 avis)",
            
            "footer_tagline": "Technologies de pointe, douceur absolue et prise en charge personnalisée pour la santé de votre sourire.",
            "footer_rights": "Cabinet Dentaire Dr. Shandy Hirsch. Tous droits réservés."
        }
    };

    function getCurrentLanguage() {
        var params = new URLSearchParams(window.location.search);
        var langFromUrl = params.get('lang');
        if (langFromUrl && (langFromUrl === 'en' || langFromUrl === 'fr')) {
            return langFromUrl;
        }
        var saved = localStorage.getItem('hirsch_lang');
        if (saved && (saved === 'en' || saved === 'fr')) {
            return saved;
        }
        // Check browser language
        var navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (navLang.indexOf('fr') === 0) return 'fr';
        return 'en';
    }

    function setLanguage(lang) {
        if (!translations[lang]) lang = 'en';
        localStorage.setItem('hirsch_lang', lang);
        document.documentElement.lang = lang;
        
        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Update switcher buttons UI
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            var btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('is-active');
            } else {
                btn.classList.remove('is-active');
            }
        });

        // Update dynamic switcher indicator if exists
        var currentIndicator = document.getElementById('current-lang-indicator');
        if (currentIndicator) {
            currentIndicator.textContent = lang.toUpperCase();
        }
    }

    window.toggleLanguage = function() {
        var current = getCurrentLanguage();
        var next = current === 'en' ? 'fr' : 'en';
        setLanguage(next);
    };

    window.switchLanguage = function(lang) {
        setLanguage(lang);
    };

    document.addEventListener('DOMContentLoaded', function() {
        var initialLang = getCurrentLanguage();
        setLanguage(initialLang);

        // Bind clicks on any language switcher button
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                var l = btn.getAttribute('data-lang');
                if (l) setLanguage(l);
            });
        });
    });
})();
