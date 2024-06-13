import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      testimonial: {
        realStories: "REAL STORIES, REAL RESULTS",
        google: "Google",
        facebook: "Facebook",
        alexTestimonial: 'After struggling with my weight for years, I finally found a solution that works. The Tirzepatide program helped me lose 25 pounds in 9 weeks. The structured approach, combined with the caring and professional support, made it so manageable. I learned to make healthier choices and stay active. Now, I\'m living a healthier lifestyle and feeling fantastic. This program exceeded my expectations and gave me the tools I needed to succeed!',
        alexAuthor: 'ALEX',
        markTestimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione, sint reprehenderit beatae cum tempore tempora numquam quo fugiat quidem quisquam adipisci harum eos ad repellat qui, expedita totam? Error!',
        markAuthor: 'MARK'
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
        excellent: "Excellent",
        reviewsOn: "reviews on",
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
        excellent: "Excellent",
        reviewsOn: "reviews on",
        back: "Back",
        skip: "Skip"
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
      }
      // Add translations for other steps...
    }
  },
  es: {
    translation: {
      testimonial: {
        realStories: "HISTORIAS REALES, RESULTADOS REALES",
        google: "Google",
        facebook: "Facebook",
        alexTestimonial: 'Después de luchar con mi peso durante años, finalmente encontré una solución que funciona. El programa de Tirzepatida me ayudó a perder 25 libras en 9 semanas. El enfoque estructurado, combinado con el apoyo cariñoso y profesional, lo hizo muy manejable. Aprendí a tomar decisiones más saludables y a mantenerme activo. Ahora, estoy viviendo un estilo de vida más saludable y me siento fantástico. ¡Este programa superó mis expectativas y me dio las herramientas que necesitaba para tener éxito!',
        alexAuthor: 'ALEX',
        markTestimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione, sint reprehenderit beatae cum tempore tempora numquam quo fugiat quidem quisquam adipisci harum eos ad repellat qui, expedita totam? Error!',
        markAuthor: 'MARK'
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
        excellent: "Excelente",
        reviewsOn: "reseñas en",
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
        excellent: "Excelente",
        reviewsOn: "reseñas en",
        back: "Volver",
        skip: "Omitir"
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
      }
      // Add translations for other steps...
    }
  },
  pt: {
    translation: {
      testimonial: {
        realStories: "HISTÓRIAS REAIS, RESULTADOS REAIS",
        google: "Google",
        facebook: "Facebook",
        alexTestimonial: 'Depois de lutar com meu peso por anos, finalmente encontrei uma solução que funciona. O programa de Tirzepatida me ajudou a perder 25 libras em 9 semanas. A abordagem estruturada, combinada com o apoio carinhoso e profissional, tornou isso muito gerenciável. Aprendi a fazer escolhas mais saudáveis e a me manter ativo. Agora, estou vivendo um estilo de vida mais saudável e me sentindo fantástico. Este programa superou minhas expectativas e me deu as ferramentas que eu precisava para ter sucesso!',
        alexAuthor: 'ALEX',
        markTestimonial: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ratione, sint reprehenderit beatae cum tempore tempora numquam quo fugiat quidem quisquam adipisci harum eos ad repellat qui, expedita totam? Error!',
        markAuthor: 'MARK'
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
        excellent: "Excelente",
        reviewsOn: "avaliações em",
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
        excellent: "Excelente",
        reviewsOn: "avaliações em",
        back: "Voltar",
        skip: "Pular"
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

