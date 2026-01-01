// Advanced AI Intents System for AL KHAMIS FOUNDATION
const aiIntents = [
    {
        category: "greeting",
        patterns: [/\bhi+\b/i, /\bhello\b/i, /\bhey\b/i, /\bgreetings\b/i, /\bsalam\b/i, /\byo+\b/i, /\bstart\b/i],
        responses: [
            "Hello! Welcome to AL KHAMIS FOUNDATION 🌟. How can I assist you today?",
            "Salam! You’ve reached AL KHAMIS AI Assistant. Ready to guide you.",
            "Hey there! Welcome aboard AL KHAMIS FOUNDATION 🚀."
        ]
    },
    {
        category: "identity",
        patterns: [/who are you/i, /what is this/i, /\bbot\b/i, /\bai\b/i, /\brobot\b/i, /made you/i, /creator/i, /developer/i],
        responses: [
            "I am the AL KHAMIS AI Assistant 🤖, here to guide you through our courses and services.",
            "This is AL KHAMIS FOUNDATION’s digital assistant, blending education and NGO support.",
            "I was created by the tech team at AL KHAMIS FOUNDATION to assist you! 💻"
        ]
    },
    {
        category: "owner",
        patterns: [/owner/i, /kabir/i, /head/i, /ceo/i, /founder/i, /boss/i, /manager/i, /director/i, /who is our/i],
        responses: [
            "Our institute is led by M. C. Kabir. You can find his Instagram, Facebook, and Twitter links in the Teachers section.",
            "Leadership: M. C. Kabir — visionary founder. Connect with him on social media via the Teachers section."
        ]
    },
    {
        category: "owner_social",
        patterns: [/owner.*insta/i, /kabir.*insta/i, /owner.*facebook/i, /kabir.*facebook/i, /owner.*twitter/i],
        responses: ["Redirecting you to the Owner's profile where you can find his social media links."],
        action: "navigate_teachers"
    },
    {
        category: "social_general",
        patterns: [/instagram/i, /facebook/i, /twitter/i, /social media/i, /insta/i, /fb/i],
        responses: ["You can find our official social media links in the Settings menu. Taking you there..."],
        action: "navigate_settings"
    },
    {
        category: "courses",
        patterns: [/course/i, /subject/i, /class/i, /study/i, /learn/i, /program/i],
        responses: [
            "We offer Computer Science, English, Arabic, Urdu, and Hindi 📚. Check the 'Courses' tab for details.",
            "Subjects available: CS, English, Arabic, Urdu, Hindi. Explore more in Courses."
        ]
    },
    {
        category: "ngo",
        patterns: [/\bngo\b/i, /welfare/i, /social/i, /help/i, /charity/i, /foundation/i],
        responses: [
            "Our NGO wing focuses on social welfare, legal aid, and blood donation.",
            "AL KHAMIS NGO runs legal aid and health services. Check the NGO section for details."
        ]
    },
    {
        category: "advocate_arif",
        patterns: [/arif/i, /khan/i],
        responses: [
            "Adv. Arif ALI Khan is a distinguished Supreme Court of India advocate. You can find his detailed profile and social media links in the NGO & Advocates section.",
            "For Supreme Court matters, Adv. Arif ALI Khan is our expert. Check the NGO section to connect with him."
        ]
    },
    {
        category: "advocate_afreen",
        patterns: [/afreen/i, /begun/i],
        responses: [
            "Adv. Afreen Begun specializes in High Court cases. Her profile and contact details are available in the NGO & Advocates section.",
            "Need High Court representation? Adv. Afreen Begun is available. Visit the NGO section for her details."
        ]
    },
    {
        category: "advocates",
        patterns: [/advocate/i, /lawyer/i, /legal/i, /court/i, /justice/i, /attorney/i, /case/i, /sue/i, /\badv\b/i],
        responses: [
            "Our legal team includes Adv. Arif ALI Khan (Supreme Court) and Adv. Afreen Begun (High Court). You can find their Instagram and Facebook details in the NGO section.",
            "We have a powerful legal team for Civil, Criminal, and Family law, led by Supreme Court and High Court advocates. Check the NGO tab for the full list."
        ]
    },
    {
        category: "blood donation",
        patterns: [/blood/i, /donate blood/i, /donor/i, /camp/i, /health/i],
        responses: [
            "We organize free blood donation camps ❤️. A humanitarian service we proudly provide.",
            "Join our blood donation drives — saving lives together."
        ]
    },
    {
        category: "contact",
        patterns: [/contact/i, /phone/i, /email/i, /call/i, /reach/i, /address/i, /number/i, /talk/i, /speak/i],
        responses: [
            "Find our contact details (Instagram, Facebook, Phone) in the Settings menu.",
            "Reach us via social media or phone — details in Settings."
        ]
    },
    {
        category: "location",
        patterns: [/location/i, /where/i, /place/i, /city/i, /address/i],
        responses: [
            "We are a digital-first institute 🌐, but our NGO operates on the ground for relief work.",
            "AL KHAMIS FOUNDATION is online-first, with NGO activities in real communities."
        ]
    },
    {
        category: "free services",
        patterns: [/free/i, /cost/i, /fee/i, /price/i, /payment/i, /charge/i],
        responses: [
            "Yes! Our institute provides free education and social services.",
            "Education and NGO services are completely free of charge."
        ]
    },
    {
        category: "teachers",
        patterns: [/hindi/i, /anjali/i],
        responses: ["Mrs. Anjali is our Hindi Language Expert. You can find her Instagram and Facebook details in the Teachers section."]
    },
    {
        category: "teachers",
        patterns: [/urdu/i, /faizan/i, /poetry/i, /ghalib/i, /iqbal/i],
        responses: ["Mr. Faizan is our Urdu Literature Specialist. Check the Teachers section for his social media links."]
    },
    {
        category: "teachers",
        patterns: [/arabic/i, /ziaul/i, /rahman/i, /quran/i, /tajweed/i],
        responses: ["Ziaul Rahman (اللغة العربية والدراسات الإسلامية) leads our Arabic & Islamic Studies. You can connect with him via Instagram or Facebook in the Teachers section."]
    },
    {
        category: "teachers",
        patterns: [/english/i, /sarah/i, /grammar/i, /spoken/i],
        responses: ["Miss Sarah is our English Department Head. Her social media contact details are available in the Teachers section."]
    },
    {
        category: "teachers",
        patterns: [/computer/i, /\bcs\b/i, /coding/i, /programming/i, /bilal/i, /tech/i, /web/i, /software/i, /science/i, /scince/i],
        responses: ["Mr. Bilal is our Computer Science Expert. You can find his Instagram and Facebook links in the Teachers section."]
    },
    {
        category: "website",
        patterns: [/website/i, /app/i, /interface/i],
        responses: ["This website is AL KHAMIS FOUNDATION’s digital campus, integrating education & social work."]
    },
    {
        category: "mission",
        patterns: [/mission/i, /vision/i, /goal/i, /aim/i],
        responses: ["Our mission: Free, high-quality education & essential social services for all."]
    },
    {
        category: "donation",
        patterns: [/donate/i, /support/i, /contribute/i, /money/i],
        responses: ["Support our NGO & Blood Donation drives by contacting us in the NGO section."]
    },
    {
        category: "confusion",
        patterns: [/^\?+$/i, /what\?+$/i, /huh/i, /confused/i, /dont understand/i, /mean/i],
        responses: [
            "It seems you might be confused 🤔. Try asking 'What courses do you offer?' or 'Who is the owner?'.",
            "I'm here to clarify! You can ask about 'Courses', 'NGO', 'Teachers', or 'Contact'."
        ]
    },
    {
        category: "excitement",
        patterns: [/!{2,}/, /wow/i, /amazing/i, /awesome/i, /fantastic/i, /cool/i],
        responses: [
            "I love the enthusiasm! 🚀 AL KHAMIS FOUNDATION is all about passion.",
            "That's great to hear! ✨ We are happy you are excited."
        ]
    },
    {
        category: "gratitude",
        patterns: [/thank/i, /thx/i, /appreciate/i, /good job/i],
        responses: [
            "You're very welcome! 😊",
            "Happy to assist! Let me know if you have more questions."
        ]
    }
];

function initAI() {
    // Create Floating Button
    const aiBtn = document.createElement('div');
    aiBtn.id = 'ai-float-btn';
    aiBtn.innerHTML = '<i class="fas fa-robot"></i>';
    aiBtn.title = "Ask AI";
    document.body.appendChild(aiBtn);

    // Create Chat Window
    const chatWindow = document.createElement('div');
    chatWindow.id = 'ai-chat-window';
    chatWindow.className = 'hidden';
    chatWindow.innerHTML = `
        <div class="chat-header">
            <h3>AL KHAMIS AI</h3>
            <span id="close-chat">&times;</span>
        </div>
        <div id="chat-messages">
            <div class="message bot-msg">Hey there! How can I help you?</div>
        </div>
        <div class="chat-input-area">
            <input type="text" id="user-input" placeholder="Type your question...">
            <button id="send-btn"><i class="fas fa-paper-plane"></i></button>
        </div>
    `;
    document.body.appendChild(chatWindow);

    // Inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
        #ai-float-btn {
            position: fixed;
            bottom: 30px;
            left: 30px;
            width: 60px;
            height: 60px;
            background: #00ffff;
            color: #000;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            cursor: pointer;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
            z-index: 10001;
            transition: 0.3s;
            animation: float 3s ease-in-out infinite;
        }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        #ai-chat-window {
            position: fixed;
            bottom: 100px;
            left: 30px;
            width: 320px;
            height: 450px;
            background: rgba(10, 10, 10, 0.95);
            border: 1px solid #00ffff;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            z-index: 10001;
            backdrop-filter: blur(10px);
            overflow: hidden;
            box-shadow: 0 0 30px rgba(0,0,0,0.8);
        }
        #ai-chat-window.hidden { display: none; }
        .chat-header { background: #00ffff; color: #000; padding: 15px; display: flex; justify-content: space-between; align-items: center; font-weight: bold; }
        #close-chat { cursor: pointer; font-size: 1.5rem; }
        #chat-messages { flex: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
        .message { padding: 10px 15px; border-radius: 10px; max-width: 80%; font-size: 0.9rem; line-height: 1.4; }
        .bot-msg { background: #333; color: #fff; align-self: flex-start; border-left: 3px solid #00ffff; }
        .user-msg { background: #00ffff; color: #000; align-self: flex-end; }
        .chat-input-area { padding: 15px; border-top: 1px solid #333; display: flex; gap: 10px; }
        #user-input { flex: 1; padding: 10px; border-radius: 5px; border: none; outline: none; background: #222; color: #fff; }
        #send-btn { background: #00ffff; border: none; padding: 0 15px; border-radius: 5px; cursor: pointer; color: #000; }
        .typing-indicator { font-style: italic; color: #aaa; font-size: 0.8rem; }
    `;
    document.head.appendChild(style);

    // Logic
    const btn = document.getElementById('ai-float-btn');
    const win = document.getElementById('ai-chat-window');
    const close = document.getElementById('close-chat');
    const send = document.getElementById('send-btn');
    const input = document.getElementById('user-input');

    let msgCount = 0;
    let context = { lastCategory: null }; // AI Memory

    btn.addEventListener('click', () => win.classList.toggle('hidden'));
    close.addEventListener('click', () => win.classList.add('hidden'));

    function reply(text) {
        msgCount++;
        let response = "";

        // 1. Check for "Too Much" / Long Conversation
        if (msgCount > 8) {
            response = "We've been chatting for a while! For complex queries, please contact the Owner directly via the Settings tab.";
            msgCount = 0; // Reset counter
            addMsg(response, 'bot-msg');
            return;
        } 
        
        // 2. Check Memory (Contextual Follow-up)
        let found = false;
        if ((/more/i.test(text) || /detail/i.test(text) || /continue/i.test(text)) && context.lastCategory) {
            const intent = aiIntents.find(i => i.category === context.lastCategory);
            if (intent) {
                response = "Here's more info: " + intent.responses[Math.floor(Math.random() * intent.responses.length)];
                found = true;
            }
        }

        // 3. Intent Processing
        if (!found) {
            for (const intent of aiIntents) {
                if (intent.patterns.some(pattern => pattern.test(text))) {
                    response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
                    
                    // Handle Navigation Actions
                    if (intent.action === 'navigate_teachers') {
                        document.getElementById('nav-teacher').click();
                    } else if (intent.action === 'navigate_settings') {
                        document.getElementById('nav-setting').click();
                    }

                    context.lastCategory = intent.category; // Save topic to memory
                    found = true;
                    break;
                }
            }
        }

        if (!found) {
            response = "Sorry, I didn’t understand that 🤔. Please try asking about courses, NGO, or contact info.";
        }

        // Simulate Typing
        addMsg("Typing...", 'bot-msg typing-indicator');
        setTimeout(() => {
            const typingMsg = document.querySelector('.typing-indicator');
            if(typingMsg) typingMsg.remove();
            addMsg(response, 'bot-msg');
        }, 1000 + Math.random() * 500);
    }

    function addMsg(text, type) {
        const div = document.createElement('div');
        div.className = `message ${type}`;
        div.innerText = text;
        document.getElementById('chat-messages').appendChild(div);
        document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
    }

    send.addEventListener('click', () => {
        const text = input.value.trim();
        if (text) {
            addMsg(text, 'user-msg');
            setTimeout(() => reply(text), 500);
            input.value = '';
        }
    });
    input.addEventListener('keypress', (e) => { if(e.key === 'Enter') send.click(); });
}

document.addEventListener('DOMContentLoaded', initAI);