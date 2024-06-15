import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      error: {
        textError: "Please enter only letters",
        fillError: "All fields are required",
        agreementError: "You must agree to the terms and conditions",
        selectError: "You have not selected anything"
      },
      testimonial: {
        realStories: "REAL STORIES, REAL RESULTS",
        google: "Google",
        facebook: "Facebook",
        alexTestimonial: 'After struggling with my weight for years, I finally found a solution that works. The Tirzepatide program helped me lose 25 pounds in 9 weeks. The structured approach, combined with the caring and professional support, made it so manageable. I learned to make healthier choices and stay active. Now, I\'m living a healthier lifestyle and feeling fantastic. This program exceeded my expectations and gave me the tools I needed to succeed!',
        alexAuthor: 'ALEX',
        markTestimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione, sint reprehenderit beatae cum tempore tempora numquam quo fugiat quidem quisquam adipisci harum eos ad repellat qui, expedita totam? Error!',
        markAuthor: 'MARK'
      },
      notEligible: {
        title: "Unfortunately, You Are Not Eligible",
        message: "Your BMI is below 27. This program requires a BMI of 27 or higher for participation. Message: Thank you for your interest. Based on your BMI, you do not qualify for this program at this time.",
        backButton: "Home"
      },
      review: {
        excellent: "Excellent",
        reviewsOn: "reviews on",
        basedOn: "Based on",
      },
      stepOne: {
        title: "BEGIN YOUR TRANSFORMATION TODAY",
        description: "Embark on a journey to a healthier, happier you. Get started now and take the first step towards transforming your life.",
        languagePrompt: "What language would you like to start?",
        chooseLocation: "Choose Your Location",
        startJourney: "Start Your Journey",
        acknowledgement: "I acknowledge the Refund Policy, Terms & Conditions, Notice of Privacy Practices, and Consent to Telehealth."
      },
      stepTwo: {
        title: "Which medication are you interested in?",
        description: "After completing your digital health visit with one of our licensed physicians, they will review your medical history and clinical information. Based on your selection, they will approve the appropriate treatment plan for you.",
        back: "Back",
        startLosingWeight: "Start Losing Weight",
        cards: [
          {
            title: "Semaglutide (3-Month treatment Plan)",
            description: "Lose up to 25lbs",
            feature1: "5mg/2ml Injection (Same as Ozempic & Wegovy)",
            feature2: "Weekly application - total of 12 applications"
          },
          {
            title: "Semaglutide (6-Month treatment Plan)",
            description: "Lose up to 60lbs",
            feature1: "5mg/2ml Injection (Same as Ozempic & Wegovy)",
            feature2: "Weekly application - total of 24 applications"
          },
          {
            title: "Tirzepatide - 6 Weeks Treatment Plan",
            description: "Lose up to 18lbs",
            feature1: "2ml of Tirzepatide* (2ml vial) (Same as Mounjaro)",
            feature2: "Weekly application - total of 6 applications"
          },
          {
            title: "Semaglutide (6-Month treatment Plan)",
            description: "Lose up to 60lbs",
            feature1: "4ml of Tirzepatide* (2 x 2ml vial) (Same as Mounjaro)",
            feature2: "Weekly application - total of 9 applications"
          }
        ]
      },
      stepThree: {
        title: "Would you like to add any additional supplements? (optional)",
        product1: {
          title: "Metabolic Booster",
          description: "Enhance your metabolism and increase energy levels with this potent blend of natural ingredients."
        },
        product2: {
          title: "Appetite Suppressant",
          description: "Reduce cravings and control hunger with our effective, natural appetite suppressant formula."
        },
        product3: {
          title: "Detox Cleanse",
          description: "Support digestive health and eliminate toxins with our gentle and effective detox cleanse supplement."
        },
        back: "Back",
        skip: "Skip",
        addToCart: "Add to cart",
        inCart: "In cart"
      },
      stepFour: {
        calculateBMI: "Calculate your Body Mass Index (BMI)",
        calculateBMIDescription: "This helps us calculate your BMI. BMI is a factor we use to determine your weight care path, so it's important to be as accurate as possible.",
        pounds: "POUNDS",
        poundsPlaceholder: "e.g. 68",
        feet: "FEET",
        feetPlaceholder: "e.g. 5",
        inches: "INCHES",
        inchesPlaceholder: "e.g. 8",
        continueJourney: "Continue your journey",
        back: "Back"
      },
      stepFive: {
        title: "Congratulations! You’re Pre-Qualified!",
        subtitle: "Please provide the upcoming information to complete your pre-qualification.",
        continueJourney: "Continue Your Journey",
        back: "Back",
        beforeText: "BEFORE",
        afterText: "AFTER",
        inspiringTransformations: "Inspiring Transformations"
      },
      stepSix: {
        question1: {
          title: "What’s your name?",
          firstName: "FIRST NAME",
          lastName: "LAST NAME",
          firstNamePlaceholder: "e.g., John",
          lastNamePlaceholder: "e.g., Doe"
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
          select: "Select..."
        },
        question3: {
          title: "What’s your date of birth?",
          month: "MONTH",
          day: "DAY",
          year: "YEAR"
        },
        question4: {
          title: "What’s your gender?",
          male: "Male",
          female: "Female",
          preferNotToSay: "Prefer not to answer"
        },
        question5: {
          title: "What’s your phone?",
          phonePlaceholder: "e.g., (123) 456-7890"
        },
        question6: {
          title: "What’s your email?",
          emailPlaceholder: "e.g., johndoe@example.com"
        },
        back: "Back",
        continueJourney: "Continue Your Journey"
      },
      stepSeven: {
        medicalInfo: {
          title: "Medical Information",
          subTitle: "Please provide the following details about your medical history and current health status."
        },
        question1: {
          label: "List any medications you are currently taking.",
          placeholder: "e.g., Metformin"
        },
        question2: {
          label: "List any allergies to medications.",
          placeholder: "e.g., Penicillin"
        },
        question3: {
          label: "Do you have any chronic medical conditions? If so, please specify.",
          placeholder: "e.g., Hypertension, Diabetes"
        },
        question4: {
          label: "Are you currently taking any prescription or over-the-counter diet aids? If so, please specify.",
          placeholder: "e.g., Garcinia Cambogia, Orlistat"
        },
        question5: {
          label: "Please list any antibiotics you are currently taking.",
          placeholder: "e.g., Amoxicillin"
        },
        question6: {
          label: "Have you taken Semaglutide, Tirzepatide, or any other weight loss medications before? If so, please list them.",
          placeholder: "e.g., Semaglutide, Tirzepatide"
        },
        back: "Back",
        continueJourney: "Continue Your Journey"
      },
      stepEight: {
        title: 'Health Conditions',
        description: 'Please indicate if you are currently diagnosed with any of the following conditions. (select multiple)',
        none: 'None',
        highBloodPressure: 'High Blood Pressure',
        preDiabetes: 'Pre-Diabetes',
        type2Diabetes: 'Type 2 Diabetes',
        hypothyroidism: 'Hypothyroidism',
        crohnsDisease: "Crohn's Disease",
        elevatedTriglycerides: 'Elevated Triglycerides',
        lupus: 'Lupus',
        antibiotics: 'Antibiotics',
        bariatricSurgery: 'Bariatric Surgery',
        hypoglycemia: 'Hypoglycemia',
        type1Diabetes: 'Type 1 Diabetes',
        cancerTreatment: 'Cancer Treatment',
        thyroidCancer: 'Thyroid Cancer',
        breastfeeding: 'Breastfeeding',
        pregnant: 'Pregnant',
        pancreatitis: 'Pancreatitis within the past 6 months, or a history of pancreatitis caused by taking a GLP-1',
        back: 'Back',
        continueJourney: 'Continue Your Journey'
      },
      stepNine: {
        title: 'Stay Informed with SMS Notifications',
        description: 'Would you like to receive SMS notifications about your program?',
        notify: 'Yes, I agree to receive SMS notifications.',
        doNotNotify: 'No, I prefer not to receive SMS notifications.',
        back: 'Back',
        continueJourney: 'Continue Your Journey'
      },
      stepTen: {
        productTitle: "Semaglutide (3-Month treatment Plan)",
        productPrice: "$889.99",
        productMonthlyPrice: "$296",
        productDescription: "Lose up to 25lbs",
        productSavings: "$1500",
        orderSummary: "Order Summary",
        reviewText: "Review Your Treatment Plan and Included Services",
        totalSavings: "Total Savings",
        perYear: "/year",
        perMonth: "/month*",
        additionalSupplements: "Additional Supplements",
        noSupplementsSelected: "(No additional supplements selected)",
        addSupplements: "Add Supplements",
        whatsIncluded: "What's Included",
        providerEvaluation: "Provider Evaluation: Included",
        medicationAdjustments: "Medication Adjustments: Included",
        onGoingCheckIns: "On-Going Check-Ins: Included",
        nutritionPlan: "Nutrition Plan: Included",
        syringes: "Syringes: Included",
        shipping: "Shipping: Free",
        totalCost: "TOTAL COST",
        totalCostAmount: "$1599.99",
        back: "Back",
        proceedToPayment: "Proceed to Payment",
        features: {
          feature1: "5mg/2ml Injection (Same as Ozempic & Wegovy)",
          feature2: "Weekly application - total of 12 applications"
        }
      },
      stepEleven: {
        title: "Semaglutide (3-Month Treatment Plan)",
        price: "$889.99",
        monthlyPrice: "$296",
        description: "Lose up to 25lbs",
        savings: "$1500", // example value for savings
        savingsTitle: "Total Savings",
        savingsPerYear: "/year",
        thankYou: {
          title: "Thank You for Your Purchase!",
          message:
            "Thank you for choosing our Semaglutide - 3-Month Treatment Plan. Your order has been successfully processed, and a confirmation email has been sent to you."
        },
        scheduleAppointment: "Schedule Your Appointment"
      },
      stepTwelve: {
          title: "Schedule Your Appointment",
          chooseTime: "Choose a Time to Consult with Our Licensed Provider",
          confirmAppointment: 'Confirm Your Appointment',
          cancel: 'Cancel',
          confirm: 'Confirm'
      },
      stepThirteen: {
        title: "Appointment Confirmed!",
        confirmationMessage: "Thank you for scheduling your appointment! You're taking an exciting step on your weight loss journey. Our team will be in touch soon to provide further details and answer any questions you may have.",
        assistanceTitle: "Need Assistance?",
        assistanceMessage: "If you have any questions or need further assistance, feel free to reach out to us via WhatsApp or call us at 561-631-5134. We're here to help!",
        whatsappBtn: "Chat with Us on WhatsApp",
        doctorText: {
          title: "Need help? Chat with me",
          support: "Customer Support",
          online: "I'm Online"
        }
      }
      
      // Add translations for other steps...
    }
  },
  es: {
    translation: {
      error: {
        textError: "Por favor, ingrese solo letras",
        fillError: "Todos los campos son obligatorios",
        agreementError: "Debe aceptar los términos y condiciones",
        selectError: "No has seleccionado nada"
      },
      testimonial: {
        realStories: "HISTORIAS REALES, RESULTADOS REALES",
        google: "Google",
        facebook: "Facebook",
        alexTestimonial: 'Después de luchar con mi peso durante años, finalmente encontré una solución que funciona. El programa de Tirzepatida me ayudó a perder 25 libras en 9 semanas. El enfoque estructurado, combinado con el apoyo cariñoso y profesional, lo hizo muy manejable. Aprendí a tomar decisiones más saludables y a mantenerme activo. Ahora, estoy viviendo un estilo de vida más saludable y me siento fantástico. ¡Este programa superó mis expectativas y me dio las herramientas que necesitaba para tener éxito!',
        alexAuthor: 'ALEX',
        markTestimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione, sint reprehenderit beatae cum tempore tempora numquam quo fugiat quidem quisquam adipisci harum eos ad repellat qui, expedita totam? Error!',
        markAuthor: 'MARK'
      },
      notEligible: {
        title: "Lamentablemente, no eres elegible",
        message: "Tu IMC es inferior a 27. Este programa requiere un IMC de 27 o superior para participar. Mensaje: Gracias por tu interés. Según tu IMC, actualmente no calificas para este programa.",
        backButton: "Inicio"
      },
      review: {
        excellent: "Excelente",
        reviewsOn: "reseñas en",
        basedOn: "Basado en",
      },
      stepOne: {
        title: "COMIENCE SU TRANSFORMACIÓN HOY",
        description: "Emprenda un viaje hacia una vida más saludable y feliz. Comience ahora y dé el primer paso hacia la transformación de su vida.",
        languagePrompt: "¿En qué idioma le gustaría comenzar?",
        chooseLocation: "Elija su ubicación",
        startJourney: "Comienza tu viaje",
        acknowledgement: "Reconozco la Política de Reembolso, los Términos y Condiciones, el Aviso de Prácticas de Privacidad y el Consentimiento para la Telemedicina."
      },
      stepTwo: {
        title: "¿En qué medicamento está interesado?",
        description: "Después de completar su visita de salud digital con uno de nuestros médicos con licencia, revisarán su historial médico e información clínica. Según su selección, aprobarán el plan de tratamiento adecuado para usted.",
        back: "Volver",
        startLosingWeight: "Comenzar a perder peso",
        cards: [
          {
            title: "Semaglutida (Plan de tratamiento de 3 meses)",
            description: "Pierda hasta 25 libras",
            feature1: "Inyección de 5 mg/2 ml (igual que Ozempic y Wegovy)",
            feature2: "Aplicación semanal - total de 12 aplicaciones"
          },
          {
            title: "Semaglutida (Plan de tratamiento de 6 meses)",
            description: "Pierda hasta 60 libras",
            feature1: "Inyección de 5 mg/2 ml (igual que Ozempic y Wegovy)",
            feature2: "Aplicación semanal - total de 24 aplicaciones"
          },
          {
            title: "Tirzepatida - Plan de tratamiento de 6 semanas",
            description: "Pierda hasta 18 libras",
            feature1: "2 ml de tirzepatida* (frasco de 2 ml) (igual que Mounjaro)",
            feature2: "Aplicación semanal - total de 6 aplicaciones"
          },
          {
            title: "Semaglutida (Plan de tratamiento de 6 meses)",
            description: "Pierda hasta 60 libras",
            feature1: "4 ml de tirzepatida* (2 x frasco de 2 ml) (igual que Mounjaro)",
            feature2: "Aplicación semanal - total de 9 aplicaciones"
          }
        ]
      },
      stepThree: {
        title: "¿Le gustaría agregar algún suplemento adicional? (opcional)",
        product1: {
          title: "Acelerador Metabólico",
          description: "Mejore su metabolismo y aumente los niveles de energía con esta potente mezcla de ingredientes naturales."
        },
        product2: {
          title: "Supresor del Apetito",
          description: "Reduzca los antojos y controle el hambre con nuestra fórmula efectiva y natural de supresión del apetito."
        },
        product3: {
          title: "Limpieza Detox",
          description: "Apoye la salud digestiva y elimine toxinas con nuestro suave y efectivo suplemento de limpieza detox."
        },
        back: "Volver",
        skip: "Omitir",
        addToCart: "Añadir a la cesta",
        inCart: "En el carrito"
      },
      stepFour: {
        calculateBMI: "Calcule su Índice de Masa Corporal (IMC)",
        calculateBMIDescription: "Esto nos ayuda a calcular su IMC. El IMC es un factor que utilizamos para determinar su camino de cuidado del peso, por lo que es importante ser lo más preciso posible.",
        pounds: "LIBRAS",
        poundsPlaceholder: "por ejemplo, 68",
        feet: "PIES",
        feetPlaceholder: "por ejemplo, 5",
        inches: "PULGADAS",
        inchesPlaceholder: "por ejemplo, 8",
        continueJourney: "Continuar su viaje",
        back: "Volver"
      },
      stepFive: {
        title: "¡Felicidades! ¡Estás precalificado!",
        subtitle: "Proporcione la próxima información para completar su precalificación.",
        continueJourney: "Continuar su viaje",
        back: "Volver",
        beforeText: "ANTES",
        afterText: "DESPUÉS",
        inspiringTransformations: "Transformaciones inspiradoras"
      },
      stepSix: {
        question1: {
          title: "¿Cuál es tu nombre?",
          firstName: "NOMBRE",
          lastName: "APELLIDO",
          firstNamePlaceholder: "ej., Juan",
          lastNamePlaceholder: "ej., Pérez"
        },
        question2: {
          title: "¿Cuál es tu dirección?",
          streetAddress: "DIRECCIÓN",
          streetAddressPlaceholder: "ej., Calle Principal 123",
          city: "CIUDAD",
          cityPlaceholder: "ej., Buenos Aires",
          zipCode: "CÓDIGO POSTAL",
          zipCodePlaceholder: "ej., 1234",
          state: "ESTADO",
          select: "Seleccionar..."
        },
        question3: {
          title: "¿Cuál es tu fecha de nacimiento?",
          month: "MES",
          day: "DÍA",
          year: "AÑO"
        },
        question4: {
          title: "¿Cuál es tu género?",
          male: "Masculino",
          female: "Femenino",
          preferNotToSay: "Prefiero no decirlo"
        },
        question5: {
          title: "¿Cuál es tu teléfono?",
          phonePlaceholder: "ej., (123) 456-7890"
        },
        question6: {
          title: "¿Cuál es tu correo electrónico?",
          emailPlaceholder: "ej., juanperez@example.com"
        },
        back: "Volver",
        continueJourney: "Continuar tu viaje"
      },
      stepSeven: {
        medicalInfo: {
          title: "Información Médica",
          subTitle: "Por favor proporciona los siguientes detalles sobre tu historial médico y estado de salud actual."
        },
        question1: {
          label: "Enumera cualquier medicamento que estés tomando actualmente.",
          placeholder: "ej., Metformina"
        },
        question2: {
          label: "Enumera cualquier alergia a medicamentos.",
          placeholder: "ej., Penicilina"
        },
        question3: {
          label: "¿Tienes alguna enfermedad crónica? Si es así, por favor especifícala.",
          placeholder: "ej., Hipertensión, Diabetes"
        },
        question4: {
          label: "¿Estás tomando actualmente algún medicamento recetado o de venta libre para dietas? Si es así, por favor especifícalo.",
          placeholder: "ej., Garcinia Cambogia, Orlistat"
        },
        question5: {
          label: "Enumera cualquier antibiótico que estés tomando actualmente.",
          placeholder: "ej., Amoxicilina"
        },
        question6: {
          label: "¿Has tomado Semaglutida, Tirzepatida u otros medicamentos para la pérdida de peso anteriormente? Si es así, por favor indícalos.",
          placeholder: "ej., Semaglutida, Tirzepatida"
        },
        back: "Volver",
        continueJourney: "Continuar tu viaje"
      },
      stepEight: {
        title: 'Condiciones de Salud',
        description: 'Indique si actualmente está diagnosticado con alguna de las siguientes condiciones. (seleccione múltiples)',
        none: 'Ninguna',
        highBloodPressure: 'Presión Arterial Alta',
        preDiabetes: 'Pre-Diabetes',
        type2Diabetes: 'Diabetes Tipo 2',
        hypothyroidism: 'Hipotiroidismo',
        crohnsDisease: 'Enfermedad de Crohn',
        elevatedTriglycerides: 'Triglicéridos Elevados',
        lupus: 'Lupus',
        antibiotics: 'Antibióticos',
        bariatricSurgery: 'Cirugía Bariátrica',
        hypoglycemia: 'Hipoglucemia',
        type1Diabetes: 'Diabetes Tipo 1',
        cancerTreatment: 'Tratamiento de Cáncer',
        thyroidCancer: 'Cáncer de Tiroides',
        breastfeeding: 'Lactancia Materna',
        pregnant: 'Embarazada',
        pancreatitis: 'Pancreatitis en los últimos 6 meses, o historial de pancreatitis causada por la toma de un GLP-1',
        back: 'Volver',
        continueJourney: 'Continuar su Viaje'
      },
      stepNine: {
        title: 'Manténgase Informado con Notificaciones SMS',
        description: '¿Le gustaría recibir notificaciones SMS sobre su programa?',
        notify: 'Sí, acepto recibir notificaciones SMS.',
        doNotNotify: 'No, prefiero no recibir notificaciones SMS.',
        back: 'Volver',
        continueJourney: 'Continuar su Viaje'
      },
      stepTen: {
        productTitle: "Semaglutida (Plan de tratamiento de 3 meses)",
        productPrice: "889,99 $",
        productMonthlyPrice: "296 $",
        productDescription: "Pierda hasta 25 libras",
        productSavings: "1500 $",
        orderSummary: "Resumen del Pedido",
        reviewText: "Revise su plan de tratamiento y servicios incluidos",
        totalSavings: "Ahorro Total",
        perYear: "/año",
        perMonth: "/mes*",
        additionalSupplements: "Suplementos Adicionales",
        noSupplementsSelected: "(No se han seleccionado suplementos adicionales)",
        addSupplements: "Agregar suplementos",
        whatsIncluded: "Qué incluye",
        providerEvaluation: "Evaluación del proveedor: Incluida",
        medicationAdjustments: "Ajustes de medicación: Incluidos",
        onGoingCheckIns: "Seguimientos continuos: Incluidos",
        nutritionPlan: "Plan de nutrición: Incluido",
        syringes: "Jeringas: Incluidas",
        shipping: "Envío: Gratis",
        totalCost: "COSTO TOTAL",
        totalCostAmount: "1599,99 $",
        back: "Volver",
        proceedToPayment: "Continuar al pago",
        features: {
          feature1: "Inyección de 5 mg / 2 ml (igual que Ozempic y Wegovy)",
          feature2: "Aplicación semanal - total de 12 aplicaciones"
        }
      },
      stepEleven: {
        title: "Semaglutida (Plan de Tratamiento de 3 meses)",
        price: "889,99 $",
        monthlyPrice: "296 $",
        description: "Pierda hasta 25 libras",
        savings: "1500 $", // valor de ejemplo para el ahorro
        savingsTitle: "Ahorro Total",
        savingsPerYear: "/año",
        thankYou: {
          title: "¡Gracias por su compra!",
          message:
            "Gracias por elegir nuestro Plan de Tratamiento de Semaglutida de 3 meses. Su pedido ha sido procesado correctamente y se ha enviado un correo electrónico de confirmación."
        },
        scheduleAppointment: "Programar su cita"
      },
      stepTwelve: {
        title: "Programa tu cita",
        chooseTime: "Elige una hora para consultar con nuestro proveedor con licencia",
        confirmAppointment: 'Confirma tu Cita',
        cancel: 'Cancelar',
        confirm: 'Confirmar'
      },
      stepThirteen: {
        title: "¡Cita Confirmada!",
        confirmationMessage: "¡Gracias por programar tu cita! Estás dando un paso emocionante en tu viaje de pérdida de peso. Nuestro equipo se pondrá en contacto pronto para brindarte más detalles y responder cualquier pregunta que puedas tener.",
        assistanceTitle: "¿Necesitas ayuda?",
        assistanceMessage: "Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en comunicarte con nosotros a través de WhatsApp o llámanos al 561-631-5134. ¡Estamos aquí para ayudarte!",
        whatsappBtn: "Chatea con nosotros en WhatsApp",
        doctorText: {
          title: "¿Necesitas ayuda? Chatea conmigo",
          support: "Soporte al Cliente",
          online: "Estoy en línea"
        }
      }
      // Add translations for other steps...
    }
  },
  pt: {
    translation: {
      error: {
        textError: "Por favor, insira apenas letras",
        fillError: "Todos os campos são obrigatórios",
        agreementError: "Você deve concordar com os termos e condições",
        selectError: "Você não selecionou nada"
      },
      testimonial: {
        realStories: "HISTÓRIAS REAIS, RESULTADOS REAIS",
        google: "Google",
        facebook: "Facebook",
        alexTestimonial: 'Depois de lutar com meu peso por anos, finalmente encontrei uma solução que funciona. O programa de Tirzepatida me ajudou a perder 25 libras em 9 semanas. A abordagem estruturada, combinada com o apoio carinhoso e profissional, tornou isso muito gerenciável. Aprendi a fazer escolhas mais saudáveis e a me manter ativo. Agora, estou vivendo um estilo de vida mais saudável e me sentindo fantástico. Este programa superou minhas expectativas e me deu as ferramentas que eu precisava para ter sucesso!',
        alexAuthor: 'ALEX',
        markTestimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione, sint reprehenderit beatae cum tempore tempora numquam quo fugiat quidem quisquam adipisci harum eos ad repellat qui, expedita totam? Error!',
        markAuthor: 'MARK'
      },
      notEligible: {
        title: "Infelizmente, Você Não é Elegível",
        message: "Seu IMC está abaixo de 27. Este programa requer um IMC de 27 ou superior para participação. Mensagem: Obrigado pelo seu interesse. Com base no seu IMC, você não se qualifica para este programa no momento.",
        backButton: "Início"
      },
      review: {
        excellent: "Excelente",
        reviewsOn: "avaliações em",
        basedOn: "Baseado em",
      },
      stepOne: {
        title: "COMECE SUA TRANSFORMAÇÃO HOJE",
        description: "Embarque em uma jornada para uma vida mais saudável e feliz. Comece agora e dê o primeiro passo para transformar sua vida.",
        languagePrompt: "Qual idioma você gostaria de começar?",
        chooseLocation: "Escolha sua localização",
        startJourney: "Comece sua jornada",
        acknowledgement: "Reconheço a Política de Reembolso, os Termos e Condições, o Aviso de Práticas de Privacidade e o Consentimento para a Telemedicina."
      },
      stepTwo: {
        title: "Em qual medicamento você está interessado?",
        description: "Após completar sua visita de saúde digital com um de nossos médicos licenciados, eles revisarão seu histórico médico e informações clínicas. Com base em sua seleção, eles aprovarão o plano de tratamento apropriado para você.",
        back: "Voltar",
        startLosingWeight: "Começar a perder peso",
        cards: [
          {
            title: "Semaglutida (Plano de tratamento de 3 meses)",
            description: "Perca até 25 libras",
            feature1: "Injeção de 5 mg/2 ml (igual ao Ozempic e Wegovy)",
            feature2: "Aplicação semanal - total de 12 aplicações"
          },
          {
            title: "Semaglutida (Plano de tratamento de 6 meses)",
            description: "Perca até 60 libras",
            feature1: "Injeção de 5 mg/2 ml (igual ao Ozempic e Wegovy)",
            feature2: "Aplicação semanal - total de 24 aplicações"
          },
          {
            title: "Tirzepatida - Plano de tratamento de 6 semanas",
            description: "Perca até 18 libras",
            feature1: "2 ml de tirzepatida* (frasco de 2 ml) (igual ao Mounjaro)",
            feature2: "Aplicação semanal - total de 6 aplicações"
          },
          {
            title: "Semaglutida (Plano de tratamento de 6 meses)",
            description: "Perca até 60 libras",
            feature1: "4 ml de tirzepatida* (2 x frasco de 2 ml) (igual ao Mounjaro)",
            feature2: "Aplicação semanal - total de 9 aplicações"
          }
        ]
      },
      stepThree: {
        title: "Gostaria de adicionar algum suplemento adicional? (opcional)",
        product1: {
          title: "Impulsionador Metabólico",
          description: "Melhore seu metabolismo e aumente os níveis de energia com esta poderosa combinação de ingredientes naturais."
        },
        product2: {
          title: "Supressor de Apetite",
          description: "Reduza os desejos e controle a fome com nossa fórmula eficaz e natural de supressão do apetite."
        },
        product3: {
          title: "Limpeza Detox",
          description: "Apoie a saúde digestiva e elimine toxinas com nosso suave e eficaz suplemento de limpeza detox."
        },
        back: "Voltar",
        skip: "Pular",
        addToCart: "Adicionar ao carrinho",
        inCart: "No carrinho"
      },
      stepFour: {
        calculateBMI: "Calcule seu Índice de Massa Corporal (IMC)",
        calculateBMIDescription: "Isso nos ajuda a calcular seu IMC. O IMC é um fator que usamos para determinar seu caminho de cuidado com o peso, por isso é importante ser o mais preciso possível.",
        pounds: "LIBRAS",
        poundsPlaceholder: "por exemplo, 68",
        feet: "PIES",
        feetPlaceholder: "por exemplo, 5",
        inches: "POLEGADAS",
        inchesPlaceholder: "por exemplo, 8",
        continueJourney: "Continue sua jornada",
        back: "Voltar"
      },
      stepFive: {
        title: "Parabéns! Você está Pré-Qualificado!",
        subtitle: "Forneça as informações a seguir para concluir sua pré-qualificação.",
        continueJourney: "Continuar sua jornada",
        back: "Voltar",
        beforeText: "ANTES",
        afterText: "DEPOIS",
        inspiringTransformations: "Transformações inspiradoras"
      },
      stepSix: {
        question1: {
          title: "Qual é o seu nome?",
          firstName: "PRIMEIRO NOME",
          lastName: "SOBRENOME",
          firstNamePlaceholder: "ex., João",
          lastNamePlaceholder: "ex., Silva"
        },
        question2: {
          title: "Qual é o seu endereço?",
          streetAddress: "ENDEREÇO",
          streetAddressPlaceholder: "ex., Rua Principal 123",
          city: "CIDADE",
          cityPlaceholder: "ex., São Paulo",
          zipCode: "CÓDIGO POSTAL",
          zipCodePlaceholder: "ex., 12345-678",
          state: "ESTADO",
          select: "Selecionar..."
        },
        question3: {
          title: "Qual é a sua data de nascimento?",
          month: "MÊS",
          day: "DIA",
          year: "ANO"
        },
        question4: {
          title: "Qual é o seu gênero?",
          male: "Masculino",
          female: "Feminino",
          preferNotToSay: "Prefiro não dizer"
        },
        question5: {
          title: "Qual é o seu telefone?",
          phonePlaceholder: "ex., (11) 98765-4321"
        },
        question6: {
          title: "Qual é o seu email?",
          emailPlaceholder: "ex., joaodasilva@example.com"
        },
        back: "Voltar",
        continueJourney: "Continuar sua jornada"
      },
      stepSeven: {
        medicalInfo: {
          title: "Informações Médicas",
          subTitle: "Por favor forneça os seguintes detalhes sobre seu histórico médico e estado de saúde atual."
        },
        question1: {
          label: "Liste todos os medicamentos que você está tomando atualmente.",
          placeholder: "ex., Metformina"
        },
        question2: {
          label: "Liste todas as alergias a medicamentos.",
          placeholder: "ex., Penicilina"
        },
        question3: {
          label: "Você possui alguma condição médica crônica? Se sim, por favor especifique.",
          placeholder: "ex., Hipertensão, Diabetes"
        },
        question4: {
          label: "Você está tomando atualmente algum auxílio dietético de venda livre ou prescrição? Se sim, por favor especifique.",
          placeholder: "ex., Garcinia Cambogia, Orlistat"
        },
        question5: {
          label: "Liste todos os antibióticos que você está tomando atualmente.",
          placeholder: "ex., Amoxicilina"
        },
        question6: {
          label: "Você já tomou Semaglutida, Tirzepatida ou outros medicamentos para perda de peso antes? Se sim, liste-os por favor.",
          placeholder: "ex., Semaglutida, Tirzepatida"
        },
        back: "Voltar",
        continueJourney: "Continuar sua jornada"
      },
      stepEight: {
        title: 'Condições de Saúde',
        description: 'Indique se você está atualmente diagnosticado com alguma das seguintes condições. (selecione várias)',
        none: 'Nenhuma',
        highBloodPressure: 'Pressão Alta',
        preDiabetes: 'Pré-Diabetes',
        type2Diabetes: 'Diabetes Tipo 2',
        hypothyroidism: 'Hipotireoidismo',
        crohnsDisease: 'Doença de Crohn',
        elevatedTriglycerides: 'Triglicerídeos Elevados',
        lupus: 'Lúpus',
        antibiotics: 'Antibióticos',
        bariatricSurgery: 'Cirurgia Bariátrica',
        hypoglycemia: 'Hipoglicemia',
        type1Diabetes: 'Diabetes Tipo 1',
        cancerTreatment: 'Tratamento de Câncer',
        thyroidCancer: 'Câncer de Tireoide',
        breastfeeding: 'Amamentação',
        pregnant: 'Grávida',
        pancreatitis: 'Pancreatite nos últimos 6 meses, ou histórico de pancreatite causada pelo uso de um GLP-1',
        back: 'Voltar',
        continueJourney: 'Continuar sua Jornada'
      },
      stepNine: {
        title: 'Fique Informado com Notificações SMS',
        description: 'Você gostaria de receber notificações SMS sobre seu programa?',
        notify: 'Sim, concordo em receber notificações SMS.',
        doNotNotify: 'Não, prefiro não receber notificações SMS.',
        back: 'Voltar',
        continueJourney: 'Continuar sua Jornada'
      },
      stepTen: {
        productTitle: "Semaglutida (Plano de tratamento de 3 meses)",
        productPrice: "889,99 $",
        productMonthlyPrice: "296 $",
        productDescription: "Perca até 25 libras",
        productSavings: "1500 $",
        orderSummary: "Resumo do Pedido",
        reviewText: "Revise o seu plano de tratamento e serviços incluídos",
        totalSavings: "Economia Total",
        perYear: "/ano",
        perMonth: "/mês*",
        additionalSupplements: "Suplementos adicionais",
        noSupplementsSelected: "(Nenhum suplemento adicional selecionado)",
        addSupplements: "Adicionar suplementos",
        whatsIncluded: "O que está incluído",
        providerEvaluation: "Avaliação do provedor: Incluída",
        medicationAdjustments: "Ajustes de medicação: Incluídos",
        onGoingCheckIns: "Acompanhamentos contínuos: Incluídos",
        nutritionPlan: "Plano de nutrição: Incluído",
        syringes: "Seringas: Incluídas",
        shipping: "Envio: Grátis",
        totalCost: "CUSTO TOTAL",
        totalCostAmount: "1599,99 $",
        back: "Voltar",
        proceedToPayment: "Prosseguir para o pagamento",
        features: {
          feature1: "Injeção de 5 mg / 2 ml (mesmo que Ozempic e Wegovy)",
          feature2: "Aplicação semanal - total de 12 aplicações"
        }
      },
      stepEleven: {
        title: "Semaglutida (Plano de Tratamento de 3 meses)",
        price: "889,99 $",
        monthlyPrice: "296 $",
        description: "Perca até 25 libras",
        savings: "1500 $", // valor de exemplo para economia
        savingsTitle: "Economia Total",
        savingsPerYear: "/ano",
        thankYou: {
          title: "Obrigado pela sua compra!",
          message:
            "Obrigado por escolher nosso Plano de Tratamento de Semaglutida de 3 meses. Seu pedido foi processado com sucesso e um e-mail de confirmação foi enviado para você."
        },
        scheduleAppointment: "Agendar sua consulta"
      },
      stepTwelve: {
        title: "Agende sua consulta",
        chooseTime: "Escolha um horário para consultar com nosso provedor licenciado",
        confirmAppointment: 'Confirme seu Agendamento',
        cancel: 'Cancelar',
        confirm: 'Confirmar'
      },
      stepThirteen: {
        title: "Consulta Confirmada!",
        confirmationMessage: "Obrigado por agendar sua consulta! Você está dando um passo emocionante em sua jornada de perda de peso. Nossa equipe entrará em contato em breve para fornecer mais detalhes e responder quaisquer perguntas que você possa ter.",
        assistanceTitle: "Precisa de Ajuda?",
        assistanceMessage: "Se você tiver alguma dúvida ou precisar de assistência adicional, sinta-se à vontade para nos contatar via WhatsApp ou ligar para nós no 561-631-5134. Estamos aqui para ajudar!",
        whatsappBtn: "Converse conosco no WhatsApp",
        doctorText: {
          title: "Precisa de ajuda? Fale comigo",
          support: "Suporte ao Cliente",
          online: "Estou Online"
        }
      }
      // Adicione traduções para outros passos, se necessário...
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma padrão
    fallbackLng: 'en', // Idioma de fallback
    interpolation: {
      escapeValue: false, // React já faz escaping
    },
  });

export default i18n;

