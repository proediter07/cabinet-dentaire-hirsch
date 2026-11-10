/**
 * Internationalization (i18n) Engine for Cabinet Dentaire Dr. Shandy Hirsch
 * Primary Starting Language: FRENCH (FR) - 100% French by default
 * Secondary Language: ENGLISH (EN)
 */
(function() {
    if (window.__hirsch_i18n_loaded) return;
    window.__hirsch_i18n_loaded = true;

    var translations = {
        fr: {
            "meta_title": "Cabinet Dentaire Dr. Shandy Hirsch | Chirurgien-Dentiste Luxembourg-Bonnevoie",
            "nav_home": "Accueil",
            "nav_about": "Le Cabinet",
            "nav_services": "Soins",
            "nav_questionnaires": "Questionnaires",
            "nav_hours": "Horaires",
            "nav_contact": "Accès & Contact",
            "nav_btn_book": "Prendre RDV",

            "hero_badge": "⭐ Note Google 5.0 / 5.0 • Luxembourg-Bonnevoie",
            "hero_title": "Soins Dentaires d'Excellence & Douceur à Luxembourg",
            "hero_desc": "Cabinet dentaire du Dr. Shandy Hirsch à Bonnevoie. Soins personnalisés et prévenants en Implantologie, Parodontologie et Esthétique du Sourire dans un cadre chaleureux et apaisant.",
            "hero_cta_book": "Prendre RDV sur Doctena",
            "hero_cta_call": "📞 +352 20 28 75 54",
            
            "lead_head": "Demande de Rappel Rapide",
            "lead_sub": "Laissez vos coordonnées ou prenez RDV directement sur Doctena.",
            "lead_ph_name": "Votre Nom et Prénom",
            "lead_ph_phone": "Numéro de téléphone (+352...)",
            "lead_btn": "Prendre RDV (Doctena)",
            "lead_note": "📞 Appel direct : <a href=\"tel:+35220287554\" style=\"color:#be185d; font-weight:700; text-decoration:underline;\">+352 20 28 75 54</a>",
            "lead_success_title": "Merci !",
            "lead_success_sub": "Redirection vers l'agenda Doctena du Dr. Hirsch...",

            "info_1_title": "Prise de Rendez-vous",
            "info_1_desc": "Réservez en ligne 24/7 sur Doctena →",
            "info_2_title": "Contact & Urgences",
            "info_2_map_btn": "Itinéraire Google Maps",
            "info_3_title": "Horaires d'Ouverture",
            "info_3_day1": "Lundi – Jeudi",
            "info_3_day2": "Vendredi",
            "info_3_day3": "Samedi (1x/mois)",
            "info_3_day4": "Dimanche & Fériés",
            "info_3_hours1": "8h30 – 17h30",
            "info_3_hours2": "8h30 – 12h30",
            "info_3_hours3": "9h30 – 14h00",
            "info_3_hours4": "Garde CHL (112)",

            "story_tag": "Bienvenue au Cabinet",
            "story_title": "Une Prise en Charge Chaleureuse, Bienveillante et <span class=\"text-highlighted\">Sans Stress</span>",
            "story_intro": "Bienvenue au cabinet dentaire Dr. Shandy Hirsch à Luxembourg – Bonnevoie. Le cabinet est dédié à fournir des soins dentaires de haute qualité et personnalisés. Notre priorité est de vous aider à maintenir une santé bucco-dentaire optimale dans une atmosphère apaisante et chaleureuse.",
            "story_slide1_title": "Approche Douce & Anti-Peur",
            "story_slide1_desc": "Pour les patients anxieux ou appréhendant le dentiste, le Dr. Hirsch prend tout le temps nécessaire avec écoute et délicatesse.",
            "story_slide2_title": "Fauteuil Ergonomique Haute Technologie",
            "story_slide2_desc": "Équipement médical de haute technologie offrant une ergonomie optimale et un confort absolu tout au long de vos soins.",
            "story_slide3_title": "Aides Optiques & Micro-Chirurgie",
            "story_slide3_desc": "Grossissement optique haute définition pour une précision micrométrique lors des chirurgies implantaires et soins parodontaux.",
            "story_slide4_title": "Spécialiste Diplômée",
            "story_slide4_desc": "Diplômée des Universités de Paris et Rennes. Une formation hospitalière continue de haut niveau en implantologie et parodontologie.",
            "story_slide5_title": "Prise en Charge des Urgences",
            "story_slide5_desc": "Des créneaux quotidiens sont réservés au cabinet en semaine pour soulager rapidement vos douleurs au +352 20 28 75 54.",

            "services_tag": "Soins & Spécialités",
            "services_title": "Une Pratique Complète au Service de <span class=\"text-highlighted\">Votre Sourire</span>",
            "services_subtitle": "Spécialiste diplômée des Universités de Paris et Rennes, le Dr. Shandy Hirsch vous accueille avec douceur pour des soins conservateurs, chirurgicaux et esthétiques.",
            "services_cta_doctena": "Prendre RDV sur Doctena",
            "srv_1_title": "Implantologie Orale & Prothèses",
            "srv_1_desc": "Remplacement fixe et pérenne des dents manquantes : implants unitaires, bridges complets et prothèses supra-implantaires. Formation approfondie de deux ans au CHU de Rennes et Université Toulouse III.",
            "srv_2_title": "Parodontologie & Soins des Gencives",
            "srv_2_desc": "Dépistage et traitement ciblé des maladies parodontales, gingivites, déchaussement et saignements gingivaux. Thérapeutiques non chirurgicales et régénération tissulaire. Spécialisation Université de Paris et Université Côte d'Azur.",
            "srv_3_title": "Dentisterie Esthétique & Blanchiment",
            "srv_3_desc": "Sublimez l'harmonie de votre sourire en toute délicatesse : éclaircissement professionnel au fauteuil, facettes céramiques sur-mesure et restaurations esthétiques. Diplôme de la prestigieuse Académie du Sourire (Aix-en-Provence).",
            "srv_4_title": "Dentisterie Générale & Prévention Douce",
            "srv_4_desc": "Détartrage doux aux ultrasons, bilans complets, soins conservateurs, pathologie de la muqueuse orale (Université de Paris) et consultations enfants avec une bienveillance totale pour instaurer une confiance durable.",
            "srv_cta": "Prendre RDV",

            "team_tag": "Votre Praticienne",
            "team_title": "Docteur Shandy Hirsch <span class=\"text-highlighted\">Chirurgien-Dentiste</span>",
            "team_subtitle": "Une prise en charge attentionnée, personnalisée et d'une grande rigueur clinique au sein d'un cabinet moderne et chaleureux à Luxembourg-Bonnevoie.",
            "team_doc_name": "Dr. Shandy Hirsch",
            "team_doc_role": "Chirurgien-Dentiste • Fondatrice du Cabinet",
            "team_doc_bio": "Spécialiste diplômée des prestigieuses Universités de Paris et Rennes en Parodontologie et Implantologie Orale. Reconnue à Luxembourg pour son approche humaine, son écoute bienveillante et ses soins tout en douceur, le Dr. Hirsch vous accueille personnellement dans un cadre apaisant et moderne afin de répondre à tous vos besoins bucco-dentaires.",
            "team_doc_badge": "Omnipraticienne & Spécialiste",
            "diplomas_title": "Diplômes & Qualifications Universitaires du Dr. Shandy Hirsch",
            "languages_label": "Langues parlées au cabinet :",
            "team_cta": "Prendre RDV avec le Dr. Hirsch sur Doctena",

            "val_tag": "Technologie & Équipements",
            "val_title": "Un Plateau Technique de <span class=\"text-highlighted\">Dernière Génération</span>",
            "val_subtitle": "Le cabinet dentaire du Dr. Hirsch investit continuellement dans des équipements médicaux de pointe pour garantir des soins précis, pérennes et d'un confort absolu.",
            "val_1_title": "Fauteuil Ergonomique Haute Technologie",
            "val_1_desc": "Centre de traitement ergonomique haut de gamme, intégrant des technologies avancées pour un confort patient inégalé pendant les séances de soins et chirurgies.",
            "val_2_title": "Aides Optiques & Micro-Chirurgie",
            "val_2_desc": "Grossissement optique chirurgical de haute précision permettant d'effectuer des micro-gestes ultra-conservateurs et d'optimiser les soins.",
            "val_3_title": "Radiographie Numérique HD Basse Dose",
            "val_3_desc": "Capteurs numériques instantanés offrant une netteté radiologique exceptionnelle tout en réduisant drastiquement l'exposition aux rayons X pour votre sécurité.",
            "val_4_title": "Stérilisation Hospitalière Classe B",
            "val_4_desc": "Chaîne d'asepsie aux normes européennes les plus rigoureuses avec traçabilité informatique complète de chaque instrument stérile pour une sécurité absolue.",

            "test_tag": "⭐ Avis Patients Vérifiés • Note Google 5.0 / 5.0",
            "test_title_1": "La Confiance et la Douceur",
            "test_title_2": "Reconnues par Nos Patients",
            "test_1_author": "Avis Vérifié Google Maps",
            "test_1_role": "⭐⭐⭐⭐⭐ Note 5.0 / 5.0 • Quartier Bonnevoie",
            "test_1_quote": "« Le Dr Hirsch est incroyablement douce et attentive. J’avais une peur panique du dentiste, mais elle prend le temps d'expliquer chaque geste et dissipe tout le stress avec bienveillance. Soins d'une douceur absolue. »",
            "test_2_author": "Avis Vérifié Google Maps",
            "test_2_role": "⭐⭐⭐⭐⭐ Note 5.0 / 5.0 • Luxembourg",
            "test_2_quote": "« Cabinet très propre, accueil chaleureux, ponctuelle et très douce dans ses soins. Une prise en charge impeccable du début à la fin. Une vraie perle à Luxembourg-Bonnevoie ! »",
            "test_3_author": "Patient Vérifié Doctena",
            "test_3_role": "⭐⭐⭐⭐⭐ Recommandation 100% • Soins & Implants",
            "test_3_quote": "« Une écoute remarquable et des explications limpides à chaque étape. Prise en charge exceptionnelle pour les implants et les soins de gencives. Tout est clair, rassurant et professionnel. »",

            "quest_tag": "Espace Patients & Téléchargements",
            "quest_title_1": "Questionnaires Médicaux",
            "quest_title_2": "Pré-Rendez-Vous",
            "quest_intro": "Afin de gagner du temps lors de votre 1er rendez-vous, veuillez télécharger et compléter le questionnaire ci-dessous. Celui-ci vous sera demandé lors de votre première visite au cabinet dentaire Dr Hirsch à Luxembourg – Bonnevoie. Vous pouvez également nous l’adresser par e-mail à : <strong>dentiste@dr-hirsch.lu</strong>.",
            "quest_cta_doctena": "Prendre RDV sur Doctena",
            "quest_card1_badge": "PDF Médical • Adulte",
            "quest_card1_title": "Questionnaire Bilan Santé Adulte",
            "quest_card1_desc": "Indispensable pour votre première consultation : antécédents médicaux, traitements en cours, allergies et motifs de votre visite.",
            "quest_card1_btn": "📥 Télécharger Questionnaire Adulte (PDF)",
            "quest_card2_badge": "PDF Médical • Pédiatrie",
            "quest_card2_title": "Questionnaire Santé Enfant",
            "quest_card2_desc": "Pour une première visite sereine de votre enfant : habitudes alimentaires, brossage et renseignements pédiatriques essentiels.",
            "quest_card2_btn": "📥 Télécharger Questionnaire Enfant (PDF)",
            "quest_card3_badge": "En Ligne 24/7 • Doctena",
            "quest_card3_title": "Prendre Rendez-Vous en Ligne",
            "quest_card3_desc": "Consultez en direct les créneaux disponibles du cabinet dentaire Dr Hirsch et réservez instantanément en quelques clics.",
            "quest_card3_btn": "🗓️ Réserver sur Doctena.lu",

            "faq_tag": "Horaires, Urgences & Accès",
            "faq_title_1": "Informations Pratiques ",
            "faq_title_2": "& Questions Fréquentes",
            "faq_subtitle": "Retrouvez tous les détails officiels sur les horaires, les protocoles d'urgence et l'accès au cabinet.",
            "faq_box_title": "Une question ou une urgence ?",
            "faq_box_desc": "Notre équipe vous accueille et vous répond avec bienveillance.",
            "faq_q1": "Quels sont les horaires d'ouverture du cabinet ?",
            "faq_a1": "<strong>Lundi au jeudi :</strong> 8h30 – 17h30 (y compris pendant la pause de midi certains jours)<br/><strong>Vendredi :</strong> 8h30 – 12h30<br/><strong>Samedi :</strong> 9h30 – 14h00 (un samedi dans le mois, sur rendez-vous)<br/><strong>Dimanche :</strong> Fermé",
            "faq_q2": "Comment se déroule la prise en charge des urgences dentaires ?",
            "faq_a2": "<strong>En semaine :</strong> Des créneaux sont spécialement réservés au cabinet pour une prise en charge rapide des urgences. Veuillez composer le <strong>+352 20 28 75 54</strong> et laisser un message en cas d'indisponibilité. Le maximum sera fait pour vous recevoir rapidement.<br/><br/><strong>Week-end et jours fériés :</strong> Le cabinet est ouvert un samedi par mois de 9h30 à 14h00. En dehors de ces créneaux, un service de garde dentaire est assuré en continu au <strong>Centre Hospitalier du Luxembourg (CHL)</strong> du samedi 14h00 au dimanche 18h00. Veuillez contacter les urgences au <strong>112</strong> (CHL : 4, rue Ernest Barblé, L-1210 Luxembourg, Tél : +352 44 11 11).",
            "faq_q3": "Comment accéder au cabinet en transports publics ou voiture ?",
            "faq_map_btn": "Ouvrir l'Itinéraire sur Google Maps ↗",
            "faq_a3": "<strong>Adresse :</strong> 12, rue William Turner, L-2634 Luxembourg (Quartier de Bonnevoie).<br/><strong>Par bus (à proximité immédiate) :</strong><br/>• <strong>Ligne 2 :</strong> arrêt Demy Schlechter (à 1 minute à pied)<br/>• <strong>Ligne 7 :</strong> arrêt Vannérus – Wisestrooss (à 2 minutes à pied)<br/>• <strong>Ligne 29 :</strong> arrêt Hippodrome (à 3 minutes à pied)<br/>À seulement 5 minutes de la <strong>Gare Centrale de Luxembourg</strong> et de la ligne de <strong>Tramway T1</strong>.<br/>Horaires et correspondances sur <a href=\"https://www.mobiliteit.lu/fr/\" target=\"_blank\" rel=\"noopener\" style=\"color:#be185d; text-decoration:underline;\">www.mobiliteit.lu</a>.",
            "faq_q4": "Quelles langues sont parlées au sein du cabinet ?",
            "faq_a4": "Le Docteur Shandy Hirsch vous accueille couramment en <strong>Français</strong>, <strong>Anglais</strong> (English), et <strong>Roumain</strong> (Română).",
            "faq_q5": "Comment prendre rendez-vous au cabinet ?",
            "faq_a5": "La prise de rendez-vous s'effectue facilement et à tout moment en ligne via la plateforme <a href=\"https://www.doctena.lu/fr/cabinet/dr_shandy_hirsch_obouta_landry-425311\" target=\"_blank\" rel=\"noopener\" style=\"color:#be185d; text-decoration:underline;\"><strong>Doctena</strong></a>, ou par téléphone auprès de notre secrétariat au <strong>+352 20 28 75 54</strong>.",

            "cta_tag": "Prendre Rendez-vous",
            "cta_title": "Prenez Soin de Votre Sourire <br/><span class=\"text-highlighted\" style=\"color:#f472b6;\">Dès Aujourd'hui</span>",
            "cta_subtitle": "Réservez votre créneau en toute simplicité en ligne sur Doctena ou contactez notre secrétariat par téléphone pour toute question.",
            "cta_btn_book": "Prendre RDV sur Doctena",
            "cta_btn_call": "📞 Appeler : +352 20 28 75 54",

            "footer_bio": "Cabinet dentaire du Dr. Shandy Hirsch à Luxembourg-Bonnevoie. Soins bucco-dentaires de haute précision, implantologie, parodontologie et dentisterie esthétique dans une atmosphère douce et bienveillante.",
            "footer_contact_head": "Coordonnées Directes",
            "footer_addr_label": "Adresse :",
            "footer_tel_label": "Téléphone :",
            "footer_mail_label": "E-mail :",
            "footer_rdv_label": "Rendez-vous :",
            "footer_hours_head": "Horaires d'Ouverture",
            "footer_h_mon": "Lundi – Jeudi : 8h30 – 17h30",
            "footer_h_fri": "Vendredi : 8h30 – 12h30",
            "footer_h_sat": "Samedi : 9h30 – 14h00 (1x/mois sur RDV)",
            "footer_h_sun": "Dimanche : Fermé",
            "footer_h_urg": "Urgences weekend : Service de garde CHL via le 112",
            "footer_privacy": "Politique de Confidentialité",
            "footer_cookies": "Gestion des Cookies",
            "footer_terms": "Mentions Légales"
        },
        en: {
            "meta_title": "Cabinet Dentaire Dr. Shandy Hirsch | Dental Surgeon Luxembourg-Bonnevoie",
            "nav_home": "Home",
            "nav_about": "The Clinic",
            "nav_services": "Treatments",
            "nav_questionnaires": "Questionnaires",
            "nav_hours": "Hours",
            "nav_contact": "Access & Contact",
            "nav_btn_book": "Book Online",

            "hero_badge": "⭐ Google Rating 5.0 / 5.0 • Luxembourg-Bonnevoie",
            "hero_title": "Gentle, High-End Dental Care in Luxembourg",
            "hero_desc": "Cabinet Dentaire Dr. Shandy Hirsch in Bonnevoie. Specialized in Oral Implantology, Periodontology, and Aesthetic Smile Design in a calm, stress-free setting.",
            "hero_cta_book": "Book Appointment on Doctena",
            "hero_cta_call": "📞 +352 20 28 75 54",
            
            "lead_head": "Request a Fast Callback",
            "lead_sub": "Leave your details or book your appointment directly on Doctena.",
            "lead_ph_name": "Your Full Name",
            "lead_ph_phone": "Phone Number (+352...)",
            "lead_btn": "Book Visit (Doctena)",
            "lead_note": "📞 Direct call: <a href=\"tel:+35220287554\" style=\"color:#be185d; font-weight:700; text-decoration:underline;\">+352 20 28 75 54</a>",
            "lead_success_title": "Thank you!",
            "lead_success_sub": "Redirecting to Dr. Hirsch's Doctena booking page...",

            "info_1_title": "Online Appointments",
            "info_1_desc": "Book 24/7 directly on Doctena →",
            "info_2_title": "Emergency & Contact",
            "info_2_map_btn": "Directions on Google Maps",
            "info_3_title": "Opening Hours",
            "info_3_day1": "Monday – Thursday",
            "info_3_day2": "Friday",
            "info_3_day3": "Saturday (1x/month)",
            "info_3_day4": "Sunday & Holidays",
            "info_3_hours1": "8:30 – 17:30",
            "info_3_hours2": "8:30 – 12:30",
            "info_3_hours3": "9:30 – 14:00",
            "info_3_hours4": "CHL Duty (112)",

            "story_tag": "Welcome to the Clinic",
            "story_title": "Warm, Attentive, and <span class=\"text-highlighted\">Stress-Free Dental Care</span>",
            "story_intro": "Welcome to Cabinet Dentaire Dr. Shandy Hirsch in Luxembourg – Bonnevoie. Our clinic is dedicated to delivering personalized, high-quality dental care. Our top priority is helping you achieve optimal oral health in a soothing, comfortable atmosphere.",
            "story_slide1_title": "Gentle & Anti-Fear Approach",
            "story_slide1_desc": "For anxious patients or those terrified of the dentist, Dr. Hirsch takes all the necessary time with patience, warmth, and gentleness.",
            "story_slide2_title": "High-Tech Ergonomic Dental Chair",
            "story_slide2_desc": "Modern medical equipment offering optimal ergonomic support and supreme patient comfort throughout all procedures.",
            "story_slide3_title": "Optical Aids & Microsurgery",
            "story_slide3_desc": "High-definition optical magnification for microscopic precision in implant surgeries and delicate periodontal treatments.",
            "story_slide4_title": "University Qualified Specialist",
            "story_slide4_desc": "Graduated from prestigious French Universities (Paris & Rennes) with specialized residency in implantology and periodontology.",
            "story_slide5_title": "Dedicated Emergency Care",
            "story_slide5_desc": "Daily slots reserved at the clinic during weekdays for urgent dental pain relief at +352 20 28 75 54.",

            "services_tag": "Clinical Specialties",
            "services_title": "Comprehensive Expertise for <span class=\"text-highlighted\">Your Health & Smile</span>",
            "services_subtitle": "Specialized degrees from the Universities of Paris and Rennes. Dr. Shandy Hirsch provides gentle preventive, surgical, and aesthetic dental care.",
            "services_cta_doctena": "Book on Doctena",
            "srv_1_title": "Oral Implantology & Prosthetics",
            "srv_1_desc": "Permanent tooth replacement: single dental implants, implant-supported bridges, and complete overdentures. 2-year hospital surgical residency training at CHU Rennes and Paul Sabatier University Toulouse.",
            "srv_2_title": "Periodontology & Gum Care",
            "srv_2_desc": "Advanced diagnosis and treatment for gum disease, bleeding gums, bone preservation, and tissue regeneration. Specialized post-graduate degrees from University of Paris and Université Côte d'Azur.",
            "srv_3_title": "Aesthetic Dentistry & Teeth Whitening",
            "srv_3_desc": "Enhance your natural smile harmony: professional chairside whitening, handcrafted ceramic veneers, and composite artistry. Certified by the renowned Académie du Sourire (Aix-en-Provence).",
            "srv_4_title": "General Dentistry & Preventive Care",
            "srv_4_desc": "Gentle ultrasonic cleaning, comprehensive oral examinations, pathology of oral mucosa (University of Paris), and compassionate pediatric dentistry to build lasting trust.",
            "srv_cta": "Book Visit",

            "team_tag": "Your Practitioner",
            "team_title": "Dr. Shandy Hirsch <span class=\"text-highlighted\">Dental Surgeon</span>",
            "team_subtitle": "Caring, personalized treatment with rigorous clinical standards in a modern, welcoming neighborhood clinic in Luxembourg-Bonnevoie.",
            "team_doc_name": "Dr. Shandy Hirsch",
            "team_doc_role": "Dental Surgeon • Practice Founder",
            "team_doc_bio": "Specialist graduated from the prestigious Universities of Paris and Rennes in Periodontology and Oral Implantology. Celebrated in Luxembourg for her gentle touch, empathy towards nervous patients, and dedication to excellence, Dr. Hirsch welcomes you personally in a serene, modern clinic.",
            "team_doc_badge": "General Practitioner & Specialist",
            "diplomas_title": "Academic Degrees & Certifications of Dr. Shandy Hirsch",
            "languages_label": "Languages spoken at the clinic:",
            "team_cta": "Book with Dr. Hirsch on Doctena",

            "val_tag": "Technology & Standards",
            "val_title": "Cutting-Edge <span class=\"text-highlighted\">Medical Equipment</span>",
            "val_subtitle": "Dr. Hirsch continuously invests in state-of-the-art clinical technology to ensure precise, durable, and painless dental treatments.",
            "val_1_title": "High-Tech Ergonomic Dental Chair",
            "val_1_desc": "Premium ergonomic treatment center offering maximum comfort and relaxation during all dental checkups and surgical procedures.",
            "val_2_title": "Optical Aids & Microsurgery",
            "val_2_desc": "High-definition surgical magnification allowing micro-invasive techniques and optimal integration of dental implants.",
            "val_3_title": "Low-Dose Digital HD Radiography",
            "val_3_desc": "Instant digital radiography providing crystal-clear imaging while drastically reducing radiation exposure for patient safety.",
            "val_4_title": "Class B Hospital-Grade Sterilization",
            "val_4_desc": "Highest European hygiene standards with full computerized traceability for every sterilized instrument, guaranteeing zero contamination risk.",

            "test_tag": "⭐ Verified Patient Reviews • 5.0 / 5.0 Stars",
            "test_title_1": "Trust and Gentle Touch",
            "test_title_2": "Praised by Our Patients",
            "test_1_author": "Verified Google Review",
            "test_1_role": "⭐⭐⭐⭐⭐ 5.0 / 5.0 Stars • Bonnevoie District",
            "test_1_quote": "“Dr. Hirsch is incredibly gentle and attentive. I used to be terrified of the dentist, but she takes all the stress away with genuine warmth and calm. Truly painless and perfect care.”",
            "test_2_author": "Verified Google Review",
            "test_2_role": "⭐⭐⭐⭐⭐ 5.0 / 5.0 Stars • Luxembourg",
            "test_2_quote": "“Spotless clinic, warm welcome, punctual, and remarkably gentle in her treatments. Impeccable care from start to finish. A true gem in Luxembourg-Bonnevoie!”",
            "test_3_author": "Verified Doctena Patient",
            "test_3_role": "⭐⭐⭐⭐⭐ 100% Recommendation • Care & Implants",
            "test_3_quote": "“Remarkable listening and crystal-clear explanations at every step. Exceptional care for implants and gum health. Everything is transparent, reassuring, and professional.”",

            "quest_tag": "Patient Portal & Downloads",
            "quest_title_1": "Pre-Appointment Medical",
            "quest_title_2": "Questionnaires",
            "quest_intro": "To save time during your first appointment, please download and complete the health questionnaire below. It will be requested during your initial visit to Dr. Hirsch's dental clinic in Luxembourg – Bonnevoie. You may also email it to us at: <strong>dentiste@dr-hirsch.lu</strong>.",
            "quest_cta_doctena": "Book on Doctena",
            "quest_card1_badge": "Medical PDF • Adult",
            "quest_card1_title": "Adult Health Questionnaire",
            "quest_card1_desc": "Essential for your first consultation: medical background, ongoing prescriptions, allergies, and the purpose of your visit.",
            "quest_card1_btn": "📥 Download Adult Questionnaire (PDF)",
            "quest_card2_badge": "Medical PDF • Pediatric",
            "quest_card2_title": "Child Health Questionnaire",
            "quest_card2_desc": "For a serene, friendly first visit for your child: brushing habits, diet, and essential pediatric dental history.",
            "quest_card2_btn": "📥 Download Child Questionnaire (PDF)",
            "quest_card3_badge": "Online 24/7 • Doctena",
            "quest_card3_title": "Online Appointment Booking",
            "quest_card3_desc": "Check live appointment availability for Dr. Hirsch and book your visit instantly in a few clicks.",
            "quest_card3_btn": "🗓️ Book on Doctena.lu",

            "faq_tag": "Hours, Emergencies & Access",
            "faq_title_1": "Practical Information ",
            "faq_title_2": "& Frequently Asked Questions",
            "faq_subtitle": "Find all official details regarding opening hours, emergency dental protocols, and public transport access.",
            "faq_box_title": "Have a question or emergency?",
            "faq_box_desc": "Our team welcomes you and is happy to assist you with care.",
            "faq_q1": "What are the clinic's opening hours?",
            "faq_a1": "<strong>Monday to Thursday:</strong> 8:30 – 17:30 (including lunch breaks on select days)<br/><strong>Friday:</strong> 8:30 – 12:30<br/><strong>Saturday:</strong> 9:30 – 14:00 (one Saturday per month, by appointment)<br/><strong>Sunday:</strong> Closed",
            "faq_q2": "How are dental emergencies handled on weekdays and weekends?",
            "faq_a2": "<strong>During weekdays:</strong> Daily priority emergency slots are reserved at the clinic for prompt relief. Please call <strong>+352 20 28 75 54</strong> and leave a voicemail if we are in surgery.<br/><br/><strong>Weekends and holidays:</strong> The clinic is open one Saturday per month from 9:30 to 14:00. Outside of these hours, a continuous emergency dental duty service is provided at the <strong>Centre Hospitalier du Luxembourg (CHL)</strong> from Saturday 14:00 to Sunday 18:00. Please contact emergency services at <strong>112</strong> (CHL: 4, rue Ernest Barblé, L-1210 Luxembourg, Tel: +352 44 11 11).",
            "faq_q3": "How can I reach the clinic by public transport or car?",
            "faq_map_btn": "Get Directions on Google Maps ↗",
            "faq_a3": "<strong>Address:</strong> 12, rue William Turner, L-2634 Luxembourg (Bonnevoie district).<br/><strong>By bus (very close proximity):</strong><br/>• <strong>Bus Line 2:</strong> Stop Demy Schlechter (1 min walk)<br/>• <strong>Bus Line 7:</strong> Stop Vannérus – Wisestrooss (2 min walk)<br/>• <strong>Bus Line 29:</strong> Stop Hippodrome (3 min walk)<br/>Only 5 minutes away from <strong>Luxembourg Central Station (Gare Centrale)</strong> and the <strong>T1 Tramway</strong> line.<br/>Timetables and connections at <a href=\"https://www.mobiliteit.lu/en/\" target=\"_blank\" rel=\"noopener\" style=\"color:#be185d; text-decoration:underline;\">www.mobiliteit.lu</a>.",
            "faq_q4": "Which languages are spoken at the clinic?",
            "faq_a4": "Dr. Shandy Hirsch fluently welcomes you in <strong>French</strong>, <strong>English</strong>, and <strong>Romanian</strong> (Română).",
            "faq_q5": "How can I book an appointment?",
            "faq_a5": "You can book easily 24/7 online via <a href=\"https://www.doctena.lu/fr/cabinet/dr_shandy_hirsch_obouta_landry-425311\" target=\"_blank\" rel=\"noopener\" style=\"color:#be185d; text-decoration:underline;\"><strong>Doctena</strong></a>, or by calling our clinic directly at <strong>+352 20 28 75 54</strong>.",

            "cta_tag": "Book Your Visit",
            "cta_title": "Take Care of Your Smile <br/><span class=\"text-highlighted\" style=\"color:#f472b6;\">Starting Today</span>",
            "cta_subtitle": "Book your dental visit in a few clicks on Doctena or contact our team by phone for any inquiries.",
            "cta_btn_book": "Book Online on Doctena",
            "cta_btn_call": "📞 Call: +352 20 28 75 54",

            "footer_bio": "Cabinet Dentaire Dr. Shandy Hirsch in Luxembourg-Bonnevoie. High-precision oral care, implantology, periodontology, and aesthetic smile design in a warm, comforting atmosphere.",
            "footer_contact_head": "Direct Contact",
            "footer_addr_label": "Address:",
            "footer_tel_label": "Phone:",
            "footer_mail_label": "Email:",
            "footer_rdv_label": "Appointments:",
            "footer_hours_head": "Opening Hours",
            "footer_h_mon": "Monday – Thursday: 8:30 – 17:30",
            "footer_h_fri": "Friday: 8:30 – 12:30",
            "footer_h_sat": "Saturday: 9:30 – 14:00 (1x/month on appt)",
            "footer_h_sun": "Sunday: Closed",
            "footer_h_urg": "Weekend emergency: CHL duty clinic via 112",
            "footer_privacy": "Privacy Policy",
            "footer_cookies": "Cookie Settings",
            "footer_terms": "Legal Notice"
        }
    };

    // Primary Starting Language: 100% FRENCH (fr) BY DEFAULT
    // Clean up any old sticky localStorage so returning users always start in French
    try {
        localStorage.removeItem('dr_hirsch_lang');
        localStorage.removeItem('dr_hirsch_lang_v2');
    } catch(e) {}

    var currentLang = 'fr';
    try {
        var urlParams = new URLSearchParams(window.location.search);
        var urlLang = urlParams.get('lang');
        if (urlLang === 'en') {
            currentLang = 'en';
        } else if (urlLang === 'fr') {
            currentLang = 'fr';
        } else {
            var sessionLang = sessionStorage.getItem('dr_hirsch_session_lang');
            currentLang = (sessionLang === 'en') ? 'en' : 'fr';
        }
    } catch(e) {
        currentLang = 'fr';
    }

    function applyLanguage(lang) {
        if (lang !== 'fr' && lang !== 'en') lang = 'fr';
        currentLang = lang;
        try {
            sessionStorage.setItem('dr_hirsch_session_lang', lang);
        } catch(e) {}

        var dict = translations[lang] || translations.fr;
        document.documentElement.lang = lang;

        // 1. Text elements
        var elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // 2. Placeholder elements
        var phElements = document.querySelectorAll('[data-i18n-ph]');
        phElements.forEach(function(el) {
            var key = el.getAttribute('data-i18n-ph');
            if (dict[key]) {
                el.placeholder = dict[key];
            }
        });

        // 3. Update active visual pill highlight smoothly
        var buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(function(btn) {
            var btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('is-active');
                btn.style.setProperty('background', '#be185d', 'important');
                btn.style.setProperty('color', '#ffffff', 'important');
                btn.style.setProperty('box-shadow', '0 2px 8px rgba(190,24,93,0.35)', 'important');
            } else {
                btn.classList.remove('is-active');
                btn.style.setProperty('background', 'transparent', 'important');
                btn.style.setProperty('color', '#475569', 'important');
                btn.style.setProperty('box-shadow', 'none', 'important');
            }
        });
    }

    // Global click delegation for language switcher (works on desktop & mobile)
    document.addEventListener('click', function(e) {
        var btn = e.target.closest('.lang-btn');
        if (!btn) return;
        e.preventDefault();
        var targetLang = btn.getAttribute('data-lang');
        if (targetLang && targetLang !== currentLang) {
            applyLanguage(targetLang);
        }
    });

    // Run on ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            applyLanguage(currentLang);
        });
    } else {
        applyLanguage(currentLang);
    }

    // Expose globally
    window.hirschSetLanguage = applyLanguage;
    window.hirschCurrentLanguage = function() { return currentLang; };
})();
