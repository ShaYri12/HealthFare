import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      error: {
        textError: "Please enter letters only.",
        fillError: "This field cannot be left blank.",
        agreementError: "You must agree to the terms and conditions.",
        selectError: "Please make a selection.",
        emailError: "The email address is not valid.",
        stateError: "Please select your state.",
        poundsError: "Please enter your weight in pounds.",
        feetError: "Please enter your height in feet.",
        inchesError: "Please enter your height in inches.",
        firstNameError: "Please enter your first name.",
        lastNameError: "Please enter your last name.",
        streetAddressError:
          "Please enter your street address (e.g., 123 Main Street).",
        cityError: "Please enter your city (e.g., Los Angeles).",
        zipCodeError: "Please enter your zip code (e.g., 90001).",
        stateMismatchError:
          "State must match the one selected at the beginning of the questionnaire.",
        monthError: "Please enter a valid month (1-12).",
        dateError: "Please enter a valid day (1-31).",
        yearError: "Please enter a valid year (e.g., 1990).",
        ageError:
          "You must be at least 18 years old to participate in the HealthFare weight loss program.",
        phoneError:
          "Please enter a valid phone number in the format (000) 000-0000.",
        phoneDigitsError: "The phone number must be at least 10 digits.",
        phoneMaxDigitsError: "The phone number must not exceed 10 digits.",
        emailRequiredError: "Please enter your email address.",
        emailInvalidError:
          "This is not a valid email address. Please enter a valid email address.",
        smsNotificationError:
          "Please select if you prefer to receive SMS notifications.",
        disqualifyTitle: "Not Qualified",
        disqualifyMsg: "Sorry You Do Not Qualify For This.",
      },
      testimonial: {
        realStories: "REAL STORIES, REAL RESULTS",
        google: "Google",
        facebook: "Facebook",
        alexTestimonial:
          "After struggling with my weight for years, I finally found a solution that works. The Tirzepatide program helped me lose 25 pounds in 9 weeks. The structured approach, combined with the caring and professional support, made it so manageable. I learned to make healthier choices and stay active. Now, I'm living a healthier lifestyle and feeling fantastic. This program exceeded my expectations and gave me the tools I needed to succeed!",
        alexAuthor: "ALEX",
        markTestimonial:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione, sint reprehenderit beatae cum tempore tempora numquam quo fugiat quidem quisquam adipisci harum eos ad repellat qui, expedita totam? Error!",
        markAuthor: "MARK",
      },
      notEligible: {
        title: "Unfortunately, You Are Not Eligible",
        message:
          "Your BMI is below 27. This program requires a BMI of 27 or higher for participation. Message: Thank you for your interest. Based on your BMI, you do not qualify for this program at this time.",
        backButton: "Home",
      },
      review: {
        excellent: "Excellent",
        reviewsOn: "reviews on",
        basedOn: "Based on",
      },
      stepOne: {
        title: "BEGIN YOUR TRANSFORMATION TODAY",
        description:
          "Embark on a journey to a healthier, happier you. Get started now and take the first step towards transforming your life.",
        languagePrompt: "What language would you like to start?",
        chooseLocation: "Choose Your Location",
        startJourney: "Start Your Journey",
        acknowledgement:
          "I acknowledge the Refund Policy, Terms & Conditions, Notice of Privacy Practices, and Consent to Telehealth.",
      },
      stepTwo: {
        title: "Which medication are you interested in?",
        description:
          "After completing your digital health visit with one of our licensed physicians, they will review your medical history and clinical information. Based on your selection, they will approve the appropriate treatment plan for you.",
        back: "Back",
        startLosingWeight: "Start Losing Weight",
        month: "Month",
        year: "year",
        totalSavings: "Total Savings",
        cards: [
          {
            bestSeller: "BEST SELLER",
            title: "Compounded Semaglutide",
            titleDesc: "Enhanced with Vitamin B-12",
            description: "Lose up to 10 pounds monthly",
            monthPlan: "Monthly Plan",
            feature1: "Weekly Application GLP-1",
            feature2: "Same as Ozempic and Wegovy",
          },
          {
            title: "Compounded SEMAGLUTIDE",
            titleDesc: "Enhanced with Vitamin B-12",
            description: "Lose up to 30 pounds",
            monthPlan: "Three Month Plan",
            feature1: "Weekly Application GLP-1",
            feature2: "Same as Ozempic and Wegovy",
          },
          {
            header: "Accelerated Weight Loss Program",
            title: "Compounded Tirzepatide",
            titleDesc: "Enhanced with Vitamin B-12",
            description: "Lose up to 4 pounds per week",
            monthPlan: "Monthly Plan",
            feature1: "Weekly Application GLP-1/GIP",
            feature2: "Same as Mounjaro and Zepbound",
          },
          {
            header: "Accelerated Weight Loss Program",
            title: "Compounded Tirzepatide",
            titleDesc: "Enhanced with Vitamin B-12 and Glycibne",
            description: "Lose up to 48 pounds ",
            monthPlan: "Three Month Plan",
            feature1: "Weekly Application GLP-1/GIP",
            feature2: "Same as Mounjaro and Zepbound",
          },
        ],
      },
      planSelection: {
          title: "Your Shipping Frequency",
          description: "How often do you want your treatment to be shipped?",
          oneMonthPlan: "one month plan",
          threeMonthPlan: "three month plan",
          continueJourney: "Continue your journey",
          back: "Back",
          month: "Month",
      },
      stepThree: {
        title: "Would you like to add any additional supplements? (optional)",
        product1: {
          title: "Metabolic Booster",
          description:
            "Enhance your metabolism and increase energy levels with this potent blend of natural ingredients.",
        },
        product2: {
          title: "Appetite Suppressant",
          description:
            "Reduce cravings and control hunger with our effective, natural appetite suppressant formula.",
        },
        product3: {
          title: "Detox Cleanse",
          description:
            "Support digestive health and eliminate toxins with our gentle and effective detox cleanse supplement.",
        },
        back: "Back",
        skip: "Skip",
      },
      stepFour: {
        calculateBMI: "Calculate your Body Mass Index (BMI)",
        calculateBMIDescription:
          "This helps us calculate your BMI. BMI is a factor we use to determine your weight care path, so it's important to be as accurate as possible.",
        pounds: "POUNDS",
        poundsPlaceholder: "e.g. 68",
        feet: "FEET",
        feetPlaceholder: "e.g. 5",
        inches: "INCHES",
        inchesPlaceholder: "e.g. 8",
        continueJourney: "Continue your journey",
        back: "Back",
      },
      stepFive: {
        title: "Congratulations! You’re Pre-Qualified!",
        subtitle:
          "Please provide the upcoming information to complete your pre-qualification.",
        continueJourney: "Continue Your Journey",
        back: "Back",
        beforeText: "BEFORE",
        afterText: "AFTER",
        inspiringTransformations: "Inspiring Transformations",
      },
      stepSix: {
        question1: {
          title: "Contact Details",
          firstName: "FIRST NAME",
          lastName: "LAST NAME",
          firstNamePlaceholder: "e.g., John",
          lastNamePlaceholder: "e.g., Doe",
          phone: "Phone",
          phonePlaceholder: "e.g., (123) 456-7890",
          email: "Email",
          emailPlaceholder: "e.g., johndoe@example.com",
          dob: "Date of Birth",
        },
        question2: {
          title: "What’s your address?",
          streetAddress: "STREET ADDRESS",
          streetAddressPlaceholder: "e.g., 123 Main St",
          city: "CITY",
          cityPlaceholder: "e.g., Los Angeles",
          zipCode: "ZIP CODE",
          zipCodePlaceholder: "e.g., 90001",
          state: "STATE",
          select: "Select...",
        },
        question3: {
          title: "What’s your date of birth?",
          month: "MONTH",
          day: "DAY",
          year: "YEAR",
        },
        question4: {
          title: "What’s your gender?",
          male: "Male",
          female: "Female",
          preferNotToSay: "Prefer not to answer",
        },
        back: "Back",
        continueJourney: "Continue Your Journey",
      },
      stepSeven: {
        medicalInfo: {
          title: "Medical Information",
          subTitle:
            "Please provide the following details about your medical history and current health status.",
        },
        question1: {
          label:
            "Please list any medications you are currently taking. If none, leave the field blank and continue.",
          placeholder: "If yes, enter here. e.g. Metformin",
        },
        question2: {
          label:
            "Please list any allergies to medications. If none, leave the field blank and continue.",
          placeholder: "If yes, enter here. e.g. Penicillin",
        },
        question3: {
          label:
            "Please list any chronic medical conditions. If none, leave the field blank and continue.",
          placeholder: "If yes, enter here. e.g. Hypertension, Diabetes",
        },
        question4: {
          label:
            "Please list any prescription or over-the-counter diet aids you are currently taking. If none, leave the field blank and continue.",
          placeholder: "If yes, enter here. e.g. Gardenia Cambodia, Berberine",
        },
        question5: {
          label:
            "Please list any antibiotics you are currently taking. If none, leave the field blank and continue.",
          placeholder: "If yes, enter here. e.g. Amoxicillin",
        },
        question6: {
          label:
            "Please list any weight loss medications you have taken before. If none, leave the field blank and continue.",
          placeholder: "If yes, enter here. e.g. Semaglutide, Tirzepatide",
        },
        back: "Back",
        continueJourney: "Continue Your Journey",
      },
      stepEight: {
        title: "Health Conditions",
        description:
          'Please select at least one health condition. If none, select "None".',
        none: "None",
        highBloodPressure: "High Blood Pressure",
        preDiabetes: "Pre-Diabetes",
        type2Diabetes: "Type 2 Diabetes",
        hypothyroidism: "Hypothyroidism",
        crohnsDisease: "Crohn's Disease",
        elevatedTriglycerides: "Elevated Triglycerides",
        lupus: "Lupus",
        antibiotics: "Antibiotics",
        bariatricSurgery: "Bariatric Surgery",
        hypoglycemia: "Hypoglycemia",
        type1Diabetes: "Type 1 Diabetes",
        cancerTreatment: "Cancer Treatment",
        thyroidCancer: "Thyroid Cancer",
        breastfeeding: "Breastfeeding",
        pregnant: "Pregnant",
        pancreatitis:
          "Pancreatitis within the past 6 months, or a history of pancreatitis caused by taking a GLP-1",
        back: "Back",
        continueJourney: "Continue Your Journey",
      },
      stepNine: {
        title: "Stay Informed with SMS Notifications",
        description:
          "Would you like to receive SMS notifications about your program?",
        notify: "Yes, I agree to receive SMS notifications.",
        doNotNotify: "No, I prefer not to receive SMS notifications.",
        back: "Back",
        continueJourney: "Continue Your Journey",
      },
      stepTen: {
        title: "Your Order Summary",
        greeting: "Hi ",
        planDesc: "Review your monthly plan and the included services",
        oneMonthPlan: "one month plan",
        threeMonthPlan: "three month plan",
        orderSummary: "Order Summary",
        reviewText: "Review Your Monthly Plan and Included Services",
        totalSavings: "Total Savings",
        perYear: "/year",
        perMonth: "/month*",
        additionalSupplements: "Additional Supplements",
        noSupplementsSelected: "(No additional supplements selected)",
        addSupplements: "Add Supplements",
        whatsIncluded: "What's Included",
        providerEvaluation: "Provider Evaluation",
        medicationAdjustments: "Medication Adjustments",
        onGoingCheckIns: "On-Going Check-Ins",
        nutritionPlan: "Nutrition Plan",
        syringes: "Syringes",
        shipping: "Overnight Shipping",
        totalCost: "TOTAL COST",
        availableAddon: "Available Add-ons",
        addons: {
          title1: "ZOFRAN",
          addon1Desc:
            "Enhance your weight loss journey with Zofran by preventing nausea often experienced with Semaglutide and Tirzepatide. Zofran helps you stay on track and potentially lose up to 10 pounds more effectively.",

          title2: "ZOFRAN",
          addon2Desc:
            "Enhance your weight loss journey with Zofran by preventing nausea often experienced with Semaglutide and Tirzepatide. Zofran helps you stay on track and potentially lose up to 10 pounds more effectively.",
        },
        noteFirst: "*This Plan requires a",
        noteSecond: "month commitment for effective results.",
        dueToday: "DUE TODAY",
        add: "Add",
        back: "Back",
        proceedToPayment: "Proceed to Payment",
        features: {
          feature1: "5mg/2ml Injection (Same as Ozempic & Wegovy)",
          feature2: "Weekly application - total of 12 applications",
        },
        inCart: "In cart",
      },
      stepEleven: {
        title: "Schedule Appointment",
        message: "Click the button below to choose your appointment time.",
        scheduleAppointment: "Schedule Your Appointment",
      },
      stepTwelve: {
        title: "Schedule Your Appointment",
        chooseTime: "Choose a Time to Consult with Our Licensed Provider",
        confirmAppointment: "Confirm Your Appointment",
        cancel: "Cancel",
        confirm: "Confirm",
      },
      stepThirteen: {
        title: "Appointment Confirmed!",
        confirmationMessage:
          "Thank you for scheduling your appointment! You're taking an exciting step on your weight loss journey. Our team will be in touch soon to provide further details and answer any questions you may have.",
        assistanceTitle: "Need Assistance?",
        assistanceMessage:
          "If you have any questions or need further assistance, feel free to reach out to us via WhatsApp or call us at 561-631-5134. We're here to help!",
        whatsappBtn: "Chat with Us on WhatsApp",
        doctorText: {
          title: "Need help? Chat with me",
          support: "Customer Support",
          online: "I'm Online",
        },
      },
      thankYou: {
          title: "Thank You for Your Purchase!",
          message:
            "Thank you for your order! Your order has been successfully processed, and a confirmation email has been sent to you.",
        },

      // Add translations for other steps...
    },
  },
  es: {
    translation: {
      error: {
        textError: "Por favor, ingresa solo letras.",
        fillError: "Este campo no puede dejarse en blanco.",
        agreementError: "Debes aceptar los términos y condiciones.",
        selectError: "Por favor, haz una selección.",
        emailError: "La dirección de correo electrónico no es válida.",
        monthRangeError: "Por favor, ingresa un mes válido (1-12).",
        dayRangeError: "Por favor, ingresa un día válido (1-31).",
        yearRangeError:
          "Por favor, ingresa un año válido entre 1900 y el año actual.",
        stateError: "Por favor, selecciona tu estado.",
        poundsError: "Por favor, ingresa tu peso en libras.",
        feetError: "Por favor, ingresa tu altura en pies.",
        inchesError: "Por favor, ingresa tu altura en pulgadas.",
        firstNameError: "Por favor, ingresa tu nombre.",
        lastNameError: "Por favor, ingresa tu apellido.",
        streetAddressError:
          "Por favor, ingresa tu dirección (ej. 123 Calle Principal).",
        cityError: "Por favor, ingresa tu ciudad (ej. Los Angeles).",
        zipCodeError: "Por favor, ingresa tu código postal (ej. 90001).",
        stateMismatchError:
          "El estado debe coincidir con el seleccionado al inicio del cuestionario.",
        monthError: "Por favor, ingresa un mes válido (1-12).",
        dateError: "Por favor, ingresa un día válido (1-31).",
        yearError: "Por favor, ingresa un año válido (ej. 1990).",
        ageError:
          "Debes tener al menos 18 años para participar en el programa de pérdida de peso de HealthFare.",
        phoneError:
          "Por favor, ingresa un número de teléfono válido en el formato (000) 000-0000.",
        phoneDigitsError:
          "El número de teléfono debe tener al menos 10 dígitos.",
        phoneMaxDigitsError:
          "El número de teléfono no debe exceder los 10 dígitos.",
        emailRequiredError:
          "Por favor, ingresa tu dirección de correo electrónico.",
        emailInvalidError:
          "Esta no es una dirección de correo electrónico válida. Por favor, ingresa una dirección de correo electrónico válida.",
        smsNotificationError:
          "Por favor, selecciona si prefieres recibir notificaciones por SMS.",
        disqualifyTitle: "No Calificado",
        disqualifyMsg: "Lo siento, no calificas para esto.",
      },
      testimonial: {
        realStories: "HISTORIAS REALES, RESULTADOS REALES",
        google: "Google",
        facebook: "Facebook",
        alexTestimonial:
          "Después de luchar con mi peso durante años, finalmente encontré una solución que funciona. El programa de Tirzepatida me ayudó a perder 25 libras en 9 semanas. El enfoque estructurado, combinado con el apoyo cariñoso y profesional, lo hizo muy manejable. Aprendí a tomar decisiones más saludables y a mantenerme activo. Ahora, estoy viviendo un estilo de vida más saludable y me siento fantástico. ¡Este programa superó mis expectativas y me dio las herramientas que necesitaba para tener éxito!",
        alexAuthor: "ALEX",
        markTestimonial:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione, sint reprehenderit beatae cum tempore tempora numquam quo fugiat quidem quisquam adipisci harum eos ad repellat qui, expedita totam? Error!",
        markAuthor: "MARK",
      },
      notEligible: {
        title: "Lamentablemente, no eres elegible",
        message:
          "Tu IMC es inferior a 27. Este programa requiere un IMC de 27 o superior para participar. Mensaje: Gracias por tu interés. Según tu IMC, actualmente no calificas para este programa.",
        backButton: "Inicio",
      },
      review: {
        excellent: "Excelente",
        reviewsOn: "reseñas en",
        basedOn: "Basado en",
      },
      stepOne: {
        title: "COMIENCE SU TRANSFORMACIÓN HOY",
        description:
          "Emprenda un viaje hacia una vida más saludable y feliz. Comience ahora y dé el primer paso hacia la transformación de su vida.",
        languagePrompt: "¿En qué idioma le gustaría comenzar?",
        chooseLocation: "Elija su ubicación",
        startJourney: "Comienza tu viaje",
        acknowledgement:
          "Reconozco la Política de Reembolso, los Términos y Condiciones, el Aviso de Prácticas de Privacidad y el Consentimiento para la Telemedicina.",
      },
      stepTwo: {
        title: "¿En qué medicamento estás interesado/a?",
        description:
          "Después de completar tu visita de salud digital con uno de nuestros médicos con licencia, revisarán tu historial médico e información clínica. Basándose en tu selección, aprobarán el plan de tratamiento adecuado para ti.",
        back: "Volver",
        startLosingWeight: "Comenzar a perder peso",
        month: "Mes",
        year: "año",
        totalSavings: "Ahorros totales",
        cards: [
          {
            bestSeller: "MÁS VENDIDO",
            title: "Semaglutida Compuesta",
            titleDesc: "Enriquecida con Vitamina B-12",
            description: "Pierde hasta 10 libras mensuales",
            monthPlan: "Plan mensual",
            feature1: "Aplicación semanal GLP-1",
            feature2: "Igual que Ozempic y Wegovy",
          },
          {
            title: "SEMAGLUTIDA COMPUESTA",
            titleDesc: "Enriquecida con Vitamina B-12",
            description: "Pierde hasta 30 libras",
            monthPlan: "Plan de tres meses",
            feature1: "Aplicación semanal GLP-1",
            feature2: "Igual que Ozempic y Wegovy",
          },
          {
            header: "Programa Acelerado de Pérdida de Peso",
            title: "Tirzepatida Compuesta",
            titleDesc: "Enriquecida con Vitamina B-12",
            description: "Pierde hasta 4 libras por semana",
            monthPlan: "Plan mensual",
            feature1: "Aplicación semanal GLP-1/GIP",
            feature2: "Igual que Mounjaro y Zepbound",
          },
          {
            header: "Programa Acelerado de Pérdida de Peso",
            title: "Tirzepatida Compuesta",
            titleDesc: "Enriquecida con Vitamina B-12 y Glicibina",
            description: "Pierde hasta 48 libras",
            monthPlan: "Plan de tres meses",
            feature1: "Aplicación semanal GLP-1/GIP",
            feature2: "Igual que Mounjaro y Zepbound",
          },
        ],
      },
      planSelection:{
        title: "Frecuencia de Envío",
        description: "¿Con qué frecuencia deseas que se envíe tu tratamiento?",
        oneMonthPlan: "plan de un mes",
        threeMonthPlan: "plan de tres meses",
        continueJourney: "Continuar su viaje",
        back: "Volver",
        month: "mes",
      },
      stepThree: {
        title: "¿Le gustaría agregar algún suplemento adicional? (opcional)",
        product1: {
          title: "Acelerador Metabólico",
          description:
            "Mejore su metabolismo y aumente los niveles de energía con esta potente mezcla de ingredientes naturales.",
        },
        product2: {
          title: "Supresor del Apetito",
          description:
            "Reduzca los antojos y controle el hambre con nuestra fórmula efectiva y natural de supresión del apetito.",
        },
        product3: {
          title: "Limpieza Detox",
          description:
            "Apoye la salud digestiva y elimine toxinas con nuestro suave y efectivo suplemento de limpieza detox.",
        },
        back: "Volver",
        skip: "Omitir",
      },
      stepFour: {
        calculateBMI: "Calcule su Índice de Masa Corporal (IMC)",
        calculateBMIDescription:
          "Esto nos ayuda a calcular su IMC. El IMC es un factor que utilizamos para determinar su camino de cuidado del peso, por lo que es importante ser lo más preciso posible.",
        pounds: "LIBRAS",
        poundsPlaceholder: "por ejemplo, 68",
        feet: "PIES",
        feetPlaceholder: "por ejemplo, 5",
        inches: "PULGADAS",
        inchesPlaceholder: "por ejemplo, 8",
        continueJourney: "Continuar su viaje",
        back: "Volver",
      },
      stepFive: {
        title: "¡Felicidades! ¡Estás precalificado!",
        subtitle:
          "Proporcione la próxima información para completar su precalificación.",
        continueJourney: "Continuar su viaje",
        back: "Volver",
        beforeText: "ANTES",
        afterText: "DESPUÉS",
        inspiringTransformations: "Transformaciones inspiradoras",
      },
      stepSix: {
        question1: {
          title: "¿Cuál es tu nombre, número de teléfono y correo electrónico?",
          firstName: "NOMBRE",
          lastName: "APELLIDO",
          firstNamePlaceholder: "por ejemplo, Juan",
          lastNamePlaceholder: "por ejemplo, Pérez",
          phone: "Teléfono",
          phonePlaceholder: "por ejemplo, (123) 456-7890",
          email: "Correo electrónico",
          emailPlaceholder: "por ejemplo, juanperez@example.com",
          dob: "Fecha de Nacimiento",
        },
        question2: {
          title: "¿Cuál es tu dirección?",
          streetAddress: "DIRECCIÓN",
          streetAddressPlaceholder: "por ejemplo, Calle Principal 123",
          city: "CIUDAD",
          cityPlaceholder: "por ejemplo, Ciudad de México",
          zipCode: "CÓDIGO POSTAL",
          zipCodePlaceholder: "por ejemplo, 12345",
          state: "ESTADO",
          select: "Seleccionar...",
        },
        question3: {
          title: "¿Cuál es tu fecha de nacimiento?",
          month: "MES",
          day: "DÍA",
          year: "AÑO",
        },
        question4: {
          title: "¿Cuál es tu género?",
          male: "Masculino",
          female: "Femenino",
          preferNotToSay: "Prefiero no decir",
        },
        back: "Volver",
        continueJourney: "Continuar tu jornada",
      },
      stepSeven: {
        medicalInfo: {
          title: "Información Médica",
          subTitle:
            "Por favor proporciona los siguientes detalles sobre tu historial médico y estado de salud actual.",
        },
        question1: {
          label:
            "Por favor, enumera cualquier medicamento que estés tomando actualmente. Si no tomas ninguno, deja el campo en blanco y continúa.",
          placeholder: "Si es así, ingresa aquí. ej., Metformina",
        },
        question2: {
          label:
            "Por favor, enumera cualquier alergia a medicamentos que tengas. Si no tienes ninguna, deja el campo en blanco y continúa.",
          placeholder: "Si es así, ingresa aquí. ej., Penicilina",
        },
        question3: {
          label:
            "Por favor, enumera cualquier condición médica crónica que tengas. Si no tienes ninguna, deja el campo en blanco y continúa.",
          placeholder: "Si es así, ingresa aquí. ej., Hipertensión, Diabetes",
        },
        question4: {
          label:
            "Por favor, enumera cualquier ayuda dietética de venta con receta o de venta libre que estés tomando actualmente. Si no tomas ninguna, deja el campo en blanco y continúa.",
          placeholder:
            "Si es así, ingresa aquí. ej., Garcinia Cambogia, Orlistat",
        },
        question5: {
          label:
            "Por favor, enumera cualquier antibiótico que estés tomando actualmente. Si no tomas ninguno, deja el campo en blanco y continúa.",
          placeholder: "Si es así, ingresa aquí. ej., Amoxicilina",
        },
        question6: {
          label:
            "Por favor, enumera cualquier medicamento para la pérdida de peso que hayas tomado antes. Si no has tomado ninguno, deja el campo en blanco y continúa.",
          placeholder: "Si es así, ingresa aquí. ej., Semaglutida, Tirzepatida",
        },
        back: "Volver",
        continueJourney: "Continuar tu viaje",
      },
      stepEight: {
        title: "Condiciones de Salud",
        description:
          'Por favor, selecciona al menos una condición de salud. Si no tienes ninguna, selecciona "Ninguna".',
        none: "Ninguna",
        highBloodPressure: "Presión Arterial Alta",
        preDiabetes: "Pre-Diabetes",
        type2Diabetes: "Diabetes Tipo 2",
        hypothyroidism: "Hipotiroidismo",
        crohnsDisease: "Enfermedad de Crohn",
        elevatedTriglycerides: "Triglicéridos Elevados",
        lupus: "Lupus",
        antibiotics: "Antibióticos",
        bariatricSurgery: "Cirugía Bariátrica",
        hypoglycemia: "Hipoglucemia",
        type1Diabetes: "Diabetes Tipo 1",
        cancerTreatment: "Tratamiento de Cáncer",
        thyroidCancer: "Cáncer de Tiroides",
        breastfeeding: "Lactancia Materna",
        pregnant: "Embarazada",
        pancreatitis:
          "Pancreatitis en los últimos 6 meses, o historial de pancreatitis causada por la toma de un GLP-1",
        back: "Volver",
        continueJourney: "Continuar su Viaje",
      },
      stepNine: {
        title: "Manténgase Informado con Notificaciones SMS",
        description:
          "¿Le gustaría recibir notificaciones SMS sobre su programa?",
        notify: "Sí, acepto recibir notificaciones SMS.",
        doNotNotify: "No, prefiero no recibir notificaciones SMS.",
        back: "Volver",
        continueJourney: "Continuar su Viaje",
      },
      stepTen: {
        title: "PAGO",
        greeting: "Hola ",
        planDesc: "Revisa tu Plan de Tratamiento y Servicios Incluidos",
        oneMonthPlan: "one month plan",
        threeMonthPlan: "Three Month Plan",
        additionalSupplements: "Suplementos Adicionales",
        noSupplementsSelected: "(No se seleccionaron suplementos adicionales)",
        addSupplements: "Agregar Suplementos",
        whatsIncluded: "Qué Está Incluido",
        providerEvaluation: "Evaluación del Proveedor: Incluido",
        medicationAdjustments: "Ajustes de Medicación: Incluido",
        onGoingCheckIns: "Revisiones Continuas: Incluido",
        nutritionPlan: "Plan de Nutrición: Incluido",
        syringes: "Jeringas: Incluido",
        shipping: "Envío: Gratis",
        totalCost: "COSTO TOTAL",
        availableAddon: "Complementos Disponibles",
        addons: {
          title1: "ZOFRAN",
          addon1Desc:
            "Mejora tu viaje de pérdida de peso con Zofran previniendo náuseas a menudo experimentadas con Semaglutida y Tirzepatida. Zofran te ayuda a mantenerte en camino y potencialmente perder hasta 10 libras más efectivamente.",
          title2: "ZOFRAN",
          addon2Desc:
            "Mejora tu viaje de pérdida de peso con Zofran previniendo náuseas a menudo experimentadas con Semaglutida y Tirzepatida. Zofran te ayuda a mantenerte en camino y potencialmente perder hasta 10 libras más efectivamente.",
        },
        noteFirst: "*Este Plan requiere un",
        noteSecond: "compromiso mensual para obtener resultados efectivos.",
        dueToday: "A PAGAR HOY",
        add: "Agregar",
        back: "Volver",
        proceedToPayment: "Proceder al Pago",
        features: {
          feature1: "Inyección de 5mg/2ml (Igual que Ozempic y Wegovy)",
          feature2: "Aplicación semanal - un total de 12 aplicaciones",
        },
        inCart: "En el carrito",
      },

      stepEleven: {
        title: "Programar Cita",
        message: "Haz clic en el botón de abajo para elegir tu hora de cita.",
        scheduleAppointment: "Programa tu cita"
      },
      stepTwelve: {
        title: "Programa tu cita",
        chooseTime:
          "Elige una hora para consultar con nuestro proveedor con licencia",
        confirmAppointment: "Confirma tu Cita",
        cancel: "Cancelar",
        confirm: "Confirmar",
      },
      stepThirteen: {
        title: "¡Cita Confirmada!",
        confirmationMessage:
          "¡Gracias por programar tu cita! Estás dando un paso emocionante en tu viaje de pérdida de peso. Nuestro equipo se pondrá en contacto pronto para brindarte más detalles y responder cualquier pregunta que puedas tener.",
        assistanceTitle: "¿Necesitas ayuda?",
        assistanceMessage:
          "Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en comunicarte con nosotros a través de WhatsApp o llámanos al 561-631-5134. ¡Estamos aquí para ayudarte!",
        whatsappBtn: "Chatea con nosotros en WhatsApp",
        doctorText: {
          title: "¿Necesitas ayuda? Chatea conmigo",
          support: "Soporte al Cliente",
          online: "Estoy en línea",
        },
      },
      thankYou: {
          title: "¡Gracias por su compra!",
          message:
            "Gracias por elegir nuestro Plan de Tratamiento de Semaglutida de 3 meses. Su pedido ha sido procesado correctamente y se ha enviado un correo electrónico de confirmación.",
        },
      // Add translations for other steps...
    },
  },
  pt: {
    translation: {
      error: {
        textError: "Por favor, insira apenas letras.",
        fillError: "Este campo não pode ser deixado em branco.",
        agreementError: "Você deve concordar com os termos e condições.",
        selectError: "Por favor, faça uma seleção.",
        emailError: "O endereço de e-mail não é válido.",
        monthRangeError: "Por favor, insira um mês válido (1-12).",
        dayRangeError: "Por favor, insira um dia válido (1-31).",
        yearRangeError:
          "Por favor, insira um ano válido entre 1900 e o ano atual.",
        stateError: "Por favor, selecione seu estado.",
        poundsError: "Por favor, insira seu peso em libras.",
        feetError: "Por favor, insira sua altura em pés.",
        inchesError: "Por favor, insira sua altura em polegadas.",
        firstNameError: "Por favor, insira seu primeiro nome.",
        lastNameError: "Por favor, insira seu sobrenome.",
        streetAddressError:
          "Por favor, insira seu endereço (ex. 123 Rua Principal).",
        cityError: "Por favor, insira sua cidade (ex. São Paulo).",
        zipCodeError: "Por favor, insira seu código postal (ex. 90001).",
        stateMismatchError:
          "O estado deve corresponder ao selecionado no inícqualifyio do questionário.",
        monthError: "Por favor, insira um mês válido (1-12).",
        dateError: "Por favor, insira um dia válido (1-31).",
        yearError: "Por favor, insira um ano válido (ex. 1990).",
        ageError:
          "Você deve ter pelo menos 18 anos para participar do programa de perda de peso HealthFare.",
        phoneError:
          "Por favor, insira um número de telefone válido no formato (000) 000-0000.",
        phoneDigitsError:
          "O número de telefone deve ter pelo menos 10 dígitos.",
        phoneMaxDigitsError:
          "O número de telefone não deve exceder 10 dígitos.",
        emailRequiredError: "Por favor, insira seu endereço de email.",
        emailInvalidError:
          "Este não é um endereço de email válido. Por favor, insira um endereço de email válido.",
        smsNotificationError:
          "Por favor, selecione se prefere receber notificações por SMS.",
        disqualifyTitle: "Não Qualificado",
        disqualifyMsg: "Desculpe, você não se qualifica para isso.",
      },
      testimonial: {
        realStories: "HISTÓRIAS REAIS, RESULTADOS REAIS",
        google: "Google",
        facebook: "Facebook",
        alexTestimonial:
          "Depois de lutar com meu peso por anos, finalmente encontrei uma solução que funciona. O programa de Tirzepatida me ajudou a perder 25 libras em 9 semanas. A abordagem estruturada, combinada com o apoio carinhoso e profissional, tornou isso muito gerenciável. Aprendi a fazer escolhas mais saudáveis e a me manter ativo. Agora, estou vivendo um estilo de vida mais saudável e me sentindo fantástico. Este programa superou minhas expectativas e me deu as ferramentas que eu precisava para ter sucesso!",
        alexAuthor: "ALEX",
        markTestimonial:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione, sint reprehenderit beatae cum tempore tempora numquam quo fugiat quidem quisquam adipisci harum eos ad repellat qui, expedita totam? Error!",
        markAuthor: "MARK",
      },
      notEligible: {
        title: "Infelizmente, Você Não é Elegível",
        message:
          "Seu IMC está abaixo de 27. Este programa requer um IMC de 27 ou superior para participação. Mensagem: Obrigado pelo seu interesse. Com base no seu IMC, você não se qualifica para este programa no momento.",
        backButton: "Início",
      },
      review: {
        excellent: "Excelente",
        reviewsOn: "avaliações em",
        basedOn: "Baseado em",
      },
      stepOne: {
        title: "COMECE SUA TRANSFORMAÇÃO HOJE",
        description:
          "Embarque em uma jornada para uma vida mais saudável e feliz. Comece agora e dê o primeiro passo para transformar sua vida.",
        languagePrompt: "Qual idioma você gostaria de começar?",
        chooseLocation: "Escolha sua localização",
        startJourney: "Comece sua jornada",
        acknowledgement:
          "Reconheço a Política de Reembolso, os Termos e Condições, o Aviso de Práticas de Privacidade e o Consentimento para a Telemedicina.",
      },
      stepTwo: {
          title: "Em qual medicamento você está interessado?",
          description:
            "Após completar sua consulta de saúde digital com um de nossos médicos licenciados, eles revisarão seu histórico médico e informações clínicas. Com base na sua seleção, eles aprovarão o plano de tratamento adequado para você.",
          back: "Voltar",
          startLosingWeight: "Começar a perder peso",
          month: "Mês",
          year: "ano",
          totalSavings: "Economia total",
          cards: [
            {
              bestSeller: "MAIS VENDIDO",
              title: "Semaglutida Composta",
              titleDesc: "Enriquecida com Vitamina B-12",
              description: "Perca até 10 libras por mês",
              monthPlan: "Plano mensal",
              feature1: "Aplicação semanal GLP-1",
              feature2: "Mesmo que Ozempic e Wegovy",
            },
            {
              title: "SEMAGLUTIDA COMPOSTA",
              titleDesc: "Enriquecida com Vitamina B-12",
              description: "Perca até 30 libras",
              monthPlan: "Plano de três meses",
              feature1: "Aplicação semanal GLP-1",
              feature2: "Mesmo que Ozempic e Wegovy",
            },
            {
              header: "Programa Acelerado de Perda de Peso",
              title: "Tirzepatida Composta",
              titleDesc: "Enriquecida com Vitamina B-12",
              description: "Perca até 4 libras por semana",
              monthPlan: "Plano mensal",
              feature1: "Aplicação semanal GLP-1/GIP",
              feature2: "Mesmo que Mounjaro e Zepbound",
            },
            {
              header: "Programa Acelerado de Perda de Peso",
              title: "Tirzepatida Composta",
              titleDesc: "Enriquecida com Vitamina B-12 e Glicibina",
              description: "Perca até 48 libras",
              monthPlan: "Plano de três meses",
              feature1: "Aplicação semanal GLP-1/GIP",
              feature2: "Mesmo que Mounjaro e Zepbound",
            },
          ],
      },
      planSelection:{
        title: "Frequência de Envio",
        description: "Com que frequência deseja que seu tratamento seja enviado?",
        oneMonthPlan: "plano de um mês",
        threeMonthPlan: "plano de três meses",
        continueJourney: "Continue sua jornada",
        back: "Voltar",
        month: "mês",
      },
      stepThree: {
        title: "Gostaria de adicionar algum suplemento adicional? (opcional)",
        product1: {
          title: "Impulsionador Metabólico",
          description:
            "Melhore seu metabolismo e aumente os níveis de energia com esta poderosa combinação de ingredientes naturais.",
        },
        product2: {
          title: "Supressor de Apetite",
          description:
            "Reduza os desejos e controle a fome com nossa fórmula eficaz e natural de supressão do apetite.",
        },
        product3: {
          title: "Limpeza Detox",
          description:
            "Apoie a saúde digestiva e elimine toxinas com nosso suave e eficaz suplemento de limpeza detox.",
        },
        back: "Voltar",
        skip: "Pular",
      },
      stepFour: {
        calculateBMI: "Calcule seu Índice de Massa Corporal (IMC)",
        calculateBMIDescription:
          "Isso nos ajuda a calcular seu IMC. O IMC é um fator que usamos para determinar seu caminho de cuidado com o peso, por isso é importante ser o mais preciso possível.",
        pounds: "LIBRAS",
        poundsPlaceholder: "por exemplo, 68",
        feet: "PIES",
        feetPlaceholder: "por exemplo, 5",
        inches: "POLEGADAS",
        inchesPlaceholder: "por exemplo, 8",
        continueJourney: "Continue sua jornada",
        back: "Voltar",
      },
      stepFive: {
        title: "Parabéns! Você está Pré-Qualificado!",
        subtitle:
          "Forneça as informações a seguir para concluir sua pré-qualificação.",
        continueJourney: "Continuar sua jornada",
        back: "Voltar",
        beforeText: "ANTES",
        afterText: "DEPOIS",
        inspiringTransformations: "Transformações inspiradoras",
      },
      stepSix: {
        question1: {
          title: "Qual é o seu nome, número de telefone e email?",
          firstName: "NOME",
          lastName: "SOBRENOME",
          firstNamePlaceholder: "por exemplo, João",
          lastNamePlaceholder: "por exemplo, Silva",
          phone: "Telefone",
          phonePlaceholder: "por exemplo, (11) 98765-4321",
          email: "Email",
          emailPlaceholder: "por exemplo, joaosilva@example.com",
          dob: "Data de Nascimento",
        },
        question2: {
          title: "Qual é o seu endereço?",
          streetAddress: "ENDEREÇO",
          streetAddressPlaceholder: "por exemplo, Rua Principal 123",
          city: "CIDADE",
          cityPlaceholder: "por exemplo, São Paulo",
          zipCode: "CEP",
          zipCodePlaceholder: "por exemplo, 12345-678",
          state: "ESTADO",
          select: "Selecionar...",
        },
        question3: {
          title: "Qual é a sua data de nascimento?",
          month: "MÊS",
          day: "DIA",
          year: "ANO",
        },
        question4: {
          title: "Qual é o seu gênero?",
          male: "Masculino",
          female: "Feminino",
          preferNotToSay: "Prefiro não dizer",
        },
        back: "Voltar",
        continueJourney: "Continuar sua jornada",
      },
      stepSeven: {
        medicalInfo: {
          title: "Informações Médicas",
          subTitle:
            "Por favor, liste qualquer medicamento que você esteja tomando atualmente. Se não estiver tomando nenhum, deixe o campo em branco e continue.",
        },
        question1: {
          label:
            "Por favor, liste qualquer alergia a medicamentos que você tenha. Se não tiver nenhuma, deixe o campo em branco e continue.",
          placeholder: "Se sim, insira aqui. ex., Metformina",
        },
        question2: {
          label:
            "Por favor, liste qualquer alergia a medicamentos que você tenha. Se não tiver nenhuma, deixe o campo em branco e continue.",
          placeholder: "Se sim, insira aqui. ex., Penicilina",
        },
        question3: {
          label:
            "Por favor, liste qualquer condição médica crônica que você tenha. Se não tiver nenhuma, deixe o campo em branco e continue.",
          placeholder: "Se sim, insira aqui. ex., Hipertensão, Diabetes",
        },
        question4: {
          label:
            "Por favor, liste qualquer auxílio dietético de prescrição ou vendido sem receita que você esteja tomando atualmente. Se não estiver tomando nenhum, deixe o campo em branco e continue.",
          placeholder: "Se sim, insira aqui. ex., Garcinia Cambogia, Orlistat",
        },
        question5: {
          label:
            "Por favor, liste qualquer antibiótico que você esteja tomando atualmente. Se não estiver tomando nenhum, deixe o campo em branco e continue.",
          placeholder: "Se sim, insira aqui. ex., Amoxicilina",
        },
        question6: {
          label:
            "Por favor, liste qualquer medicamento para perda de peso que você tenha tomado antes. Se não tiver tomado nenhum, deixe o campo em branco e continue.",
          placeholder: "Se sim, insira aqui. ex., Semaglutida, Tirzepatida",
        },
        back: "Voltar",
        continueJourney: "Continuar sua jornada",
      },
      stepEight: {
        title: "Condições de Saúde",
        description:
          'Por favor, selecione pelo menos uma condição de saúde. Se não tiver nenhuma, selecione "Nenhuma".',
        none: "Nenhuma",
        highBloodPressure: "Pressão Alta",
        preDiabetes: "Pré-Diabetes",
        type2Diabetes: "Diabetes Tipo 2",
        hypothyroidism: "Hipotireoidismo",
        crohnsDisease: "Doença de Crohn",
        elevatedTriglycerides: "Triglicerídeos Elevados",
        lupus: "Lúpus",
        antibiotics: "Antibióticos",
        bariatricSurgery: "Cirurgia Bariátrica",
        hypoglycemia: "Hipoglicemia",
        type1Diabetes: "Diabetes Tipo 1",
        cancerTreatment: "Tratamento de Câncer",
        thyroidCancer: "Câncer de Tireoide",
        breastfeeding: "Amamentação",
        pregnant: "Grávida",
        pancreatitis:
          "Pancreatite nos últimos 6 meses, ou histórico de pancreatite causada pelo uso de um GLP-1",
        back: "Voltar",
        continueJourney: "Continuar sua Jornada",
      },
      stepNine: {
        title: "Fique Informado com Notificações SMS",
        description:
          "Você gostaria de receber notificações SMS sobre seu programa?",
        notify: "Sim, concordo em receber notificações SMS.",
        doNotNotify: "Não, prefiro não receber notificações SMS.",
        back: "Voltar",
        continueJourney: "Continuar sua Jornada",
      },
      stepTen: {
        title: "FINALIZAR COMPRA",
        greeting: "Olá ",
        planDesc: "Revise seu Plano de Tratamento e Serviços Incluídos",
        productTitle: "Semaglutida (Plano de Tratamento de 3 Meses)",
        productPrice: "$889.99",
        productMonthlyPrice: "$296",
        productDescription: "Perca até 25 lbs",
        productSavings: "$1500",
        orderSummary: "Resumo do Pedido",
        reviewText: "Revise seu Plano de Tratamento e Serviços Incluídos",
        totalSavings: "Economia Total",
        perYear: "/ano",
        perMonth: "/mês*",
        additionalSupplements: "Suplementos Adicionais",
        noSupplementsSelected: "(Nenhum suplemento adicional selecionado)",
        addSupplements: "Adicionar Suplementos",
        whatsIncluded: "O que Está Incluído",
        providerEvaluation: "Avaliação do Provedor: Incluído",
        medicationAdjustments: "Ajustes de Medicação: Incluído",
        onGoingCheckIns: "Acompanhamentos Contínuos: Incluído",
        nutritionPlan: "Plano de Nutrição: Incluído",
        syringes: "Seringas: Incluído",
        shipping: "Envio: Grátis",
        totalCost: "CUSTO TOTAL",
        availableAddon: "Complementos Disponíveis",
        addons: {
          title1: "ZOFRAN",
          addon1Desc:
            "Melhore sua jornada de perda de peso com Zofran, prevenindo náuseas frequentemente experimentadas com Semaglutida e Tirzepatida. Zofran ajuda você a manter o foco e potencialmente perder até 10 libras de forma mais eficaz.",
          title2: "ZOFRAN",
          addon2Desc:
            "Melhore sua jornada de perda de peso com Zofran, prevenindo náuseas frequentemente experimentadas com Semaglutida e Tirzepatida. Zofran ajuda você a manter o foco e potencialmente perder até 10 libras de forma mais eficaz.",
        },
        noteFirst: "*Este Plano requer um",
        noteSecond: "compromisso mensal para obter resultados eficazes.",
        dueToday: "DEVIDO HOJE",
        add: "Adicionar",
        back: "Voltar",
        proceedToPayment: "Prosseguir para Pagamento",
        features: {
          feature1: "Injeção de 5mg/2ml (Igual ao Ozempic & Wegovy)",
          feature2: "Aplicação semanal - total de 12 aplicações",
        },
        inCart: "No carrinho",
      },

      stepEleven: {
        title: "Agendar Consulta",
        message: "Clique no botão abaixo para escolher o seu horário de consulta.",
        scheduleAppointment: "Agende sua consulta"
      },
      stepTwelve: {
        title: "Agende sua consulta",
        chooseTime:
          "Escolha um horário para consultar com nosso provedor licenciado",
        confirmAppointment: "Confirme seu Agendamento",
        cancel: "Cancelar",
        confirm: "Confirmar",
      },
      stepThirteen: {
        title: "Consulta Confirmada!",
        confirmationMessage:
          "Obrigado por agendar sua consulta! Você está dando um passo emocionante em sua jornada de perda de peso. Nossa equipe entrará em contato em breve para fornecer mais detalhes e responder quaisquer perguntas que você possa ter.",
        assistanceTitle: "Precisa de Ajuda?",
        assistanceMessage:
          "Se você tiver alguma dúvida ou precisar de assistência adicional, sinta-se à vontade para nos contatar via WhatsApp ou ligar para nós no 561-631-5134. Estamos aqui para ajudar!",
        whatsappBtn: "Converse conosco no WhatsApp",
        doctorText: {
          title: "Precisa de ajuda? Fale comigo",
          support: "Suporte ao Cliente",
          online: "Estou Online",
        },
      },
      thankYou: {
          title: "Obrigado pela sua compra!",
          message:
            "Obrigado por escolher nosso Plano de Tratamento de Semaglutida de 3 meses. Seu pedido foi processado com sucesso e um e-mail de confirmação foi enviado para você.",
        },
      // Adicione traduções para outros passos, se necessário...
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma padrão
  fallbackLng: "en", // Idioma de fallback
  interpolation: {
    escapeValue: false, // React já faz escaping
  },
});

export default i18n;
