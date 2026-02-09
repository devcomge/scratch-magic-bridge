export interface BilingualText {
  en: string;
  ka: string;
}

export interface ContentBlock {
  type: 'text' | 'heading' | 'tip' | 'challenge' | 'scratch-embed' | 'link';
  content: BilingualText;
  scratchProjectId?: string;
  url?: string;
}

export interface QuizQuestion {
  question: BilingualText;
  options: BilingualText[];
  correctIndex: number;
  explanation: BilingualText;
}

export interface Lesson {
  id: string;
  title: BilingualText;
  description: BilingualText;
  duration: number;
  objectives: BilingualText[];
  content: ContentBlock[];
  quiz: QuizQuestion[];
  scratchProjectId?: string;
}

export interface Chapter {
  id: number;
  title: BilingualText;
  description: BilingualText;
  icon: string;
  color: string;
  lessons: Lesson[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: { en: 'Getting Started', ka: 'დაწყება' },
    description: { en: 'Learn what Scratch is and explore its interface', ka: 'გაიგე რა არის Scratch და შეისწავლე მისი ინტერფეისი' },
    icon: 'Rocket',
    color: 'scratch-orange',
    lessons: [
      {
        id: '1-1',
        title: { en: 'What is Scratch?', ka: 'რა არის Scratch?' },
        description: { en: 'Discover the amazing world of Scratch programming', ka: 'აღმოაჩინე Scratch პროგრამირების საოცარი სამყარო' },
        duration: 10,
        objectives: [
          { en: 'Understand what Scratch is and who created it', ka: 'გაიგე რა არის Scratch და ვინ შექმნა' },
          { en: 'Know what you can create with Scratch', ka: 'იცოდე რა შეგიძლია შექმნა Scratch-ით' },
          { en: 'Visit the Scratch website', ka: 'ეწვიე Scratch-ის ვებსაიტს' },
        ],
        content: [
          {
            type: 'text',
            content: {
              en: 'Welcome to the world of programming! Scratch is a free programming language created by MIT (Massachusetts Institute of Technology) that makes coding as easy as snapping puzzle pieces together. Instead of typing complicated code, you drag and drop colorful blocks to create programs!',
              ka: 'კეთილი იყოს შენი მობრძანება პროგრამირების სამყაროში! Scratch არის უფასო პროგრამირების ენა, რომელიც შექმნა MIT-მა (მასაჩუსეტსის ტექნოლოგიური ინსტიტუტი). ის კოდირებას ისე მარტივს ხდის, როგორც თავსატეხის ნაწილების ერთმანეთთან მიერთება. რთული კოდის ნაცვლად, ფერად ბლოკებს გადაათრევ და ააწყობ პროგრამებს!',
            },
          },
          {
            type: 'heading',
            content: { en: 'What can you create?', ka: 'რა შეგიძლია შექმნა?' },
          },
          {
            type: 'text',
            content: {
              en: 'With Scratch, the possibilities are endless! You can create:\n\n• 🎮 Games — from simple catch games to complex adventures\n• 📖 Interactive stories — with characters, dialogue, and choices\n• 🎨 Animations — bring your drawings to life\n• 🎵 Music and art — create digital instruments and visual effects\n• 📊 Simulations — model real-world phenomena',
              ka: 'Scratch-ით შესაძლებლობები უსაზღვროა! შეგიძლია შექმნა:\n\n• 🎮 თამაშები — მარტივი დაჭერის თამაშებიდან რთულ თავგადასავლებამდე\n• 📖 ინტერაქტიული ისტორიები — პერსონაჟებით, დიალოგებით და არჩევანებით\n• 🎨 ანიმაციები — გააცოცხლე შენი ნახატები\n• 🎵 მუსიკა და ხელოვნება — შექმენი ციფრული ინსტრუმენტები\n• 📊 სიმულაციები — დაამოდელირე რეალური ფენომენები',
            },
          },
          {
            type: 'tip',
            content: {
              en: 'Scratch is completely free and works right in your web browser — no need to install anything! Millions of kids around the world use Scratch to learn coding.',
              ka: 'Scratch სრულიად უფასოა და მუშაობს პირდაპირ ბრაუზერში — არაფრის დაინსტალირება არ არის საჭირო! მილიონობით ბავშვი მთელ მსოფლიოში იყენებს Scratch-ს კოდირების სასწავლებლად.',
            },
          },
          {
            type: 'scratch-embed',
            content: { en: 'Check out this example project — a fun animation made entirely in Scratch!', ka: 'ნახე ეს მაგალითი — სახალისო ანიმაცია, მთლიანად Scratch-ში შექმნილი!' },
            scratchProjectId: '10128407',
          },
          {
            type: 'challenge',
            content: {
              en: 'Visit scratch.mit.edu and explore the homepage. Click on "Explore" to see what other people have created. Find a project you like and click the green flag to play it!',
              ka: 'ეწვიე scratch.mit.edu-ს და შეისწავლე მთავარი გვერდი. დააჭირე "Explore"-ს, რომ ნახო სხვების ნამუშევრები. იპოვე პროექტი, რომელიც მოგწონს და დააჭირე მწვანე დროშას სათამაშოდ!',
            },
          },
        ],
        quiz: [
          {
            question: { en: 'Who created Scratch?', ka: 'ვინ შექმნა Scratch?' },
            options: [
              { en: 'Google', ka: 'Google' },
              { en: 'MIT (Massachusetts Institute of Technology)', ka: 'MIT (მასაჩუსეტსის ტექნოლოგიური ინსტიტუტი)' },
              { en: 'Apple', ka: 'Apple' },
              { en: 'Microsoft', ka: 'Microsoft' },
            ],
            correctIndex: 1,
            explanation: { en: 'Scratch was created by the Lifelong Kindergarten Group at MIT!', ka: 'Scratch შექმნა MIT-ის Lifelong Kindergarten ჯგუფმა!' },
          },
          {
            question: { en: 'How do you program in Scratch?', ka: 'როგორ აპროგრამებ Scratch-ში?' },
            options: [
              { en: 'By typing code in a text editor', ka: 'ტექსტურ რედაქტორში კოდის აკრეფით' },
              { en: 'By dragging and dropping colorful blocks', ka: 'ფერადი ბლოკების გადათრევით' },
              { en: 'By drawing pictures', ka: 'სურათების ხატვით' },
              { en: 'By talking to the computer', ka: 'კომპიუტერთან საუბრით' },
            ],
            correctIndex: 1,
            explanation: { en: 'In Scratch, you program by snapping colorful blocks together — like building with LEGO!', ka: 'Scratch-ში პროგრამირებ ფერადი ბლოკების ერთმანეთთან მიერთებით — LEGO-ს აწყობის მსგავსად!' },
          },
          {
            question: { en: 'Which of these can you NOT create in Scratch?', ka: 'რომელს ვერ შექმნი Scratch-ში?' },
            options: [
              { en: 'A game', ka: 'თამაშს' },
              { en: 'An animation', ka: 'ანიმაციას' },
              { en: 'A mobile phone app for the App Store', ka: 'მობილური ტელეფონის აპს App Store-სთვის' },
              { en: 'An interactive story', ka: 'ინტერაქტიულ ისტორიას' },
            ],
            correctIndex: 2,
            explanation: { en: 'Scratch projects run in the web browser, not as mobile apps. But you can still do amazing things!', ka: 'Scratch პროექტები ბრაუზერში მუშაობს, არა როგორც მობილური აპები. მაგრამ მაინც საოცარი რაღაცების გაკეთება შეგიძლია!' },
          },
        ],
      },
      {
        id: '1-2',
        title: { en: 'Creating Your Account', ka: 'ანგარიშის შექმნა' },
        description: { en: 'Set up your Scratch account to save and share projects', ka: 'შექმენი Scratch ანგარიში პროექტების შესანახად და გასაზიარებლად' },
        duration: 8,
        objectives: [
          { en: 'Create a Scratch account', ka: 'შექმენი Scratch ანგარიში' },
          { en: 'Learn about online safety', ka: 'ისწავლე ონლაინ უსაფრთხოება' },
          { en: 'Explore your profile page', ka: 'შეისწავლე შენი პროფილის გვერდი' },
        ],
        content: [
          {
            type: 'text',
            content: {
              en: 'To save your Scratch projects and share them with others, you\'ll need a free Scratch account. Let\'s create one together!',
              ka: 'Scratch პროექტების შესანახად და სხვებისთვის გასაზიარებლად, საჭიროა უფასო Scratch ანგარიში. ერთად შევქმნათ!',
            },
          },
          {
            type: 'heading',
            content: { en: 'Step-by-step Instructions', ka: 'ნაბიჯ-ნაბიჯ ინსტრუქცია' },
          },
          {
            type: 'text',
            content: {
              en: '1. Go to scratch.mit.edu\n2. Click "Join Scratch" at the top of the page\n3. Choose a username (don\'t use your real name!)\n4. Create a password you\'ll remember\n5. Follow the remaining steps\n6. Ask a parent or teacher to confirm your email',
              ka: '1. გადადი scratch.mit.edu-ზე\n2. დააჭირე "Join Scratch"-ს გვერდის ზემოთ\n3. აირჩიე მომხმარებლის სახელი (არ გამოიყენო შენი ნამდვილი სახელი!)\n4. შექმენი პაროლი, რომელიც დაგამახსოვრდება\n5. მიყევი დარჩენილ ნაბიჯებს\n6. სთხოვე მშობელს ან მასწავლებელს ელფოსტის დადასტურება',
            },
          },
          {
            type: 'tip',
            content: {
              en: '🔒 Online Safety Tip: Never use your real name as your username, and never share your password with anyone except your parents or teacher!',
              ka: '🔒 ონლაინ უსაფრთხოების რჩევა: არასოდეს გამოიყენო შენი ნამდვილი სახელი მომხმარებლის სახელად და არასოდეს გაუზიარო პაროლი სხვას, მშობლის ან მასწავლებლის გარდა!',
            },
          },
          {
            type: 'challenge',
            content: {
              en: 'Create your Scratch account at scratch.mit.edu. Once you\'re logged in, click on your username to see your profile page. Try changing your profile icon!',
              ka: 'შექმენი Scratch ანგარიში scratch.mit.edu-ზე. შესვლის შემდეგ, დააჭირე შენს მომხმარებლის სახელზე პროფილის სანახავად. სცადე პროფილის ხატულას შეცვლა!',
            },
          },
        ],
        quiz: [
          {
            question: { en: 'What should you NOT use as your Scratch username?', ka: 'რა არ უნდა გამოიყენო Scratch-ის მომხმარებლის სახელად?' },
            options: [
              { en: 'A fun nickname', ka: 'სახალისო მეტსახელი' },
              { en: 'Your real full name', ka: 'შენი ნამდვილი სრული სახელი' },
              { en: 'A made-up word', ka: 'მოგონილი სიტყვა' },
              { en: 'Your favorite character name', ka: 'საყვარელი პერსონაჟის სახელი' },
            ],
            correctIndex: 1,
            explanation: { en: 'Never use your real name online! Pick a fun, creative username instead.', ka: 'არასოდეს გამოიყენო ნამდვილი სახელი ონლაინ! ამის ნაცვლად აირჩიე სახალისო, კრეატიული მომხმარებლის სახელი.' },
          },
        ],
      },
      {
        id: '1-3',
        title: { en: 'The Scratch Interface', ka: 'Scratch-ის ინტერფეისი' },
        description: { en: 'Learn your way around the Scratch editor', ka: 'შეისწავლე Scratch რედაქტორის გარემო' },
        duration: 15,
        objectives: [
          { en: 'Identify the main parts of the Scratch editor', ka: 'ამოიცანი Scratch რედაქტორის მთავარი ნაწილები' },
          { en: 'Understand what the Stage, Sprites, and Blocks are', ka: 'გაიგე რა არის სცენა, სპრაიტები და ბლოკები' },
          { en: 'Run your first Scratch project', ka: 'გაუშვი შენი პირველი Scratch პროექტი' },
        ],
        content: [
          {
            type: 'text',
            content: {
              en: 'When you open the Scratch editor, you\'ll see several important areas. Let\'s explore each one!',
              ka: 'როცა Scratch რედაქტორს გახსნი, რამდენიმე მნიშვნელოვან არეალს დაინახავ. მოდი, თითოეული შევისწავლოთ!',
            },
          },
          {
            type: 'heading',
            content: { en: '🎬 The Stage', ka: '🎬 სცენა' },
          },
          {
            type: 'text',
            content: {
              en: 'The Stage is where your project comes to life! It\'s the white area in the top-right corner where your characters (called Sprites) move, talk, and interact. Think of it like a movie screen or a game window.',
              ka: 'სცენა არის ადგილი, სადაც შენი პროექტი ცოცხლდება! ეს არის თეთრი არეალი ზედა მარჯვენა კუთხეში, სადაც შენი პერსონაჟები (სპრაიტები) მოძრაობენ, საუბრობენ და ურთიერთქმედებენ.',
            },
          },
          {
            type: 'heading',
            content: { en: '🐱 Sprites', ka: '🐱 სპრაიტები' },
          },
          {
            type: 'text',
            content: {
              en: 'Sprites are the characters and objects in your project. The default sprite is the Scratch Cat! You can add new sprites, draw your own, or upload pictures. Each sprite can have its own set of code blocks.',
              ka: 'სპრაიტები არის პერსონაჟები და ობიექტები შენს პროექტში. ნაგულისხმევი სპრაიტი არის Scratch-ის კატა! შეგიძლია დაამატო ახალი სპრაიტები, დახატო საკუთარი, ან ატვირთო სურათები.',
            },
          },
          {
            type: 'heading',
            content: { en: '🧩 Block Palette', ka: '🧩 ბლოკების პალიტრა' },
          },
          {
            type: 'text',
            content: {
              en: 'The Block Palette is on the left side of the screen. This is where you find all the code blocks organized by color and category:\n\n• 🔵 Motion — move and rotate sprites\n• 💜 Looks — change appearance, say things\n• 🔊 Sound — play sounds and music\n• 🟡 Events — start scripts when things happen\n• 🟠 Control — loops and conditions\n• 🔵 Sensing — detect things\n• 🟢 Operators — math and logic\n• 🟠 Variables — store data',
              ka: 'ბლოკების პალიტრა ეკრანის მარცხენა მხარეს არის. აქ ნახავ ყველა კოდის ბლოკს, ფერებისა და კატეგორიების მიხედვით დაჯგუფებულს:\n\n• 🔵 მოძრაობა — სპრაიტების გადაადგილება და ბრუნვა\n• 💜 გარეგნობა — გარეგნობის შეცვლა\n• 🔊 ხმა — ხმებისა და მუსიკის დაკვრა\n• 🟡 მოვლენები — სკრიპტების დაწყება\n• 🟠 კონტროლი — ციკლები და პირობები\n• 🔵 შეგრძნება — გარემოს აღქმა\n• 🟢 ოპერატორები — მათემატიკა და ლოგიკა\n• 🟠 ცვლადები — მონაცემების შენახვა',
            },
          },
          {
            type: 'tip',
            content: {
              en: 'Click the Green Flag button above the Stage to run your project, and the Red Stop button to stop it. Try it now!',
              ka: 'დააჭირე მწვანე დროშის ღილაკს სცენის ზემოთ პროექტის გასაშვებად, და წითელ Stop ღილაკს გასაჩერებლად. სცადე ახლავე!',
            },
          },
          {
            type: 'scratch-embed',
            content: { en: 'Here\'s a simple project showing the Scratch interface in action:', ka: 'აქ არის მარტივი პროექტი, რომელიც გვიჩვენებს Scratch ინტერფეისს მოქმედებაში:' },
            scratchProjectId: '282656474',
          },
          {
            type: 'challenge',
            content: {
              en: 'Open scratch.mit.edu/projects/editor and try these:\n1. Click on different block categories to see the blocks\n2. Drag a "move 10 steps" block to the scripts area\n3. Click on it to see the cat move!\n4. Try adding a "say Hello! for 2 seconds" block',
              ka: 'გახსენი scratch.mit.edu/projects/editor და სცადე:\n1. დააჭირე სხვადასხვა ბლოკების კატეგორიას\n2. გადაიტანე "move 10 steps" ბლოკი სკრიპტების არეალში\n3. დააჭირე მას კატის გადასაადგილებლად!\n4. სცადე "say Hello! for 2 seconds" ბლოკის დამატება',
            },
          },
        ],
        quiz: [
          {
            question: { en: 'What is the Stage in Scratch?', ka: 'რა არის სცენა Scratch-ში?' },
            options: [
              { en: 'Where you find code blocks', ka: 'სადაც კოდის ბლოკებს პოულობ' },
              { en: 'Where your project comes to life and sprites perform', ka: 'სადაც პროექტი ცოცხლდება და სპრაიტები მოქმედებენ' },
              { en: 'Where you save your files', ka: 'სადაც ფაილებს ინახავ' },
              { en: 'The login page', ka: 'შესვლის გვერდი' },
            ],
            correctIndex: 1,
            explanation: { en: 'The Stage is your project\'s "screen" where everything happens!', ka: 'სცენა არის შენი პროექტის "ეკრანი", სადაც ყველაფერი ხდება!' },
          },
          {
            question: { en: 'What are Sprites?', ka: 'რა არის სპრაიტები?' },
            options: [
              { en: 'A type of drink', ka: 'სასმელის სახეობა' },
              { en: 'Code blocks', ka: 'კოდის ბლოკები' },
              { en: 'Characters and objects in your project', ka: 'პერსონაჟები და ობიექტები პროექტში' },
              { en: 'Sound effects', ka: 'ხმოვანი ეფექტები' },
            ],
            correctIndex: 2,
            explanation: { en: 'Sprites are the characters (like the cat!) and objects that appear on the Stage.', ka: 'სპრაიტები არის პერსონაჟები (კატის მსგავსად!) და ობიექტები, რომლებიც სცენაზე ჩანს.' },
          },
          {
            question: { en: 'How do you start running a Scratch project?', ka: 'როგორ გაუშვებ Scratch პროექტს?' },
            options: [
              { en: 'Press the spacebar', ka: 'დააჭირე spacebar-ს' },
              { en: 'Click the Green Flag', ka: 'დააჭირე მწვანე დროშას' },
              { en: 'Double-click the Stage', ka: 'ორჯერ დააჭირე სცენას' },
              { en: 'Type "run"', ka: 'აკრიფე "run"' },
            ],
            correctIndex: 1,
            explanation: { en: 'The Green Flag button starts your project — it\'s like pressing Play!', ka: 'მწვანე დროშის ღილაკი იწყებს პროექტს — ეს Play ღილაკის დაჭერას ჰგავს!' },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: { en: 'Motion & Looks', ka: 'მოძრაობა და გარეგნობა' },
    description: { en: 'Make sprites move, dance, and change appearance', ka: 'გადააადგილე სპრაიტები, აცეკვე და შეუცვალე გარეგნობა' },
    icon: 'Move',
    color: 'scratch-blue',
    lessons: [
      {
        id: '2-1',
        title: { en: 'Moving Sprites', ka: 'სპრაიტების გადაადგილება' },
        description: { en: 'Learn how to make sprites walk, glide, and bounce', ka: 'ისწავლე სპრაიტების სიარული, სრიალი და ხტუნვა' },
        duration: 12,
        objectives: [
          { en: 'Use Motion blocks to move sprites', ka: 'გამოიყენე მოძრაობის ბლოკები სპრაიტების გადასაადგილებლად' },
          { en: 'Make sprites glide smoothly', ka: 'სპრაიტების გლუვად სრიალი' },
        ],
        content: [],
        quiz: [],
      },
      {
        id: '2-2',
        title: { en: 'Changing Looks', ka: 'გარეგნობის შეცვლა' },
        description: { en: 'Switch costumes, change colors, and add visual effects', ka: 'კოსტიუმების შეცვლა, ფერების შეცვლა და ვიზუალური ეფექტები' },
        duration: 10,
        objectives: [
          { en: 'Use Looks blocks to change sprite appearance', ka: 'გამოიყენე გარეგნობის ბლოკები' },
        ],
        content: [],
        quiz: [],
      },
      {
        id: '2-3',
        title: { en: 'Simple Animations', ka: 'მარტივი ანიმაციები' },
        description: { en: 'Create your first animation with costume switching', ka: 'შექმენი პირველი ანიმაცია კოსტიუმის შეცვლით' },
        duration: 15,
        objectives: [
          { en: 'Create a walk animation', ka: 'შექმენი სიარულის ანიმაცია' },
        ],
        content: [],
        quiz: [],
      },
    ],
  },
  {
    id: 3,
    title: { en: 'Sound & Events', ka: 'ხმა და მოვლენები' },
    description: { en: 'Add sounds and make things happen with events', ka: 'დაამატე ხმები და მოვლენებით გააკეთე საინტერესო რაღაცები' },
    icon: 'Volume2',
    color: 'scratch-green',
    lessons: [
      {
        id: '3-1',
        title: { en: 'Adding Sounds', ka: 'ხმების დამატება' },
        description: { en: 'Make your projects come alive with sounds and music', ka: 'გააცოცხლე პროექტები ხმებითა და მუსიკით' },
        duration: 10,
        objectives: [{ en: 'Play sounds in Scratch', ka: 'დაუკარი ხმები Scratch-ში' }],
        content: [],
        quiz: [],
      },
      {
        id: '3-2',
        title: { en: 'Events & Interactions', ka: 'მოვლენები და ინტერაქცია' },
        description: { en: 'Respond to clicks, key presses, and more', ka: 'უპასუხე დაჭერებს, კლავიშებს და სხვას' },
        duration: 12,
        objectives: [{ en: 'Use event blocks', ka: 'გამოიყენე მოვლენების ბლოკები' }],
        content: [],
        quiz: [],
      },
    ],
  },
  {
    id: 4,
    title: { en: 'Control Flow', ka: 'მართვის ნაკადი' },
    description: { en: 'Master loops and conditional statements', ka: 'დაეუფლე ციკლებს და პირობით ოპერატორებს' },
    icon: 'Repeat',
    color: 'scratch-yellow',
    lessons: [
      {
        id: '4-1',
        title: { en: 'Loops', ka: 'ციკლები' },
        description: { en: 'Repeat actions with repeat and forever blocks', ka: 'გაიმეორე მოქმედებები repeat და forever ბლოკებით' },
        duration: 12,
        objectives: [{ en: 'Use repeat and forever loops', ka: 'გამოიყენე repeat და forever ციკლები' }],
        content: [],
        quiz: [],
      },
      {
        id: '4-2',
        title: { en: 'Conditionals', ka: 'პირობები' },
        description: { en: 'Make decisions with if/else blocks', ka: 'მიიღე გადაწყვეტილებები if/else ბლოკებით' },
        duration: 12,
        objectives: [{ en: 'Use if/else blocks', ka: 'გამოიყენე if/else ბლოკები' }],
        content: [],
        quiz: [],
      },
      {
        id: '4-3',
        title: { en: 'Complex Logic', ka: 'რთული ლოგიკა' },
        description: { en: 'Combine loops and conditions for powerful programs', ka: 'შეაერთე ციკლები და პირობები ძლიერი პროგრამებისთვის' },
        duration: 15,
        objectives: [{ en: 'Combine control blocks', ka: 'შეაერთე კონტროლის ბლოკები' }],
        content: [],
        quiz: [],
      },
    ],
  },
  {
    id: 5,
    title: { en: 'Variables & Data', ka: 'ცვლადები და მონაცემები' },
    description: { en: 'Store information and keep score in your projects', ka: 'შეინახე ინფორმაცია და აითვალე ქულები პროექტებში' },
    icon: 'Database',
    color: 'scratch-red',
    lessons: [
      {
        id: '5-1',
        title: { en: 'Variables & Score', ka: 'ცვლადები და ქულა' },
        description: { en: 'Create variables and build a score counter', ka: 'შექმენი ცვლადები და ააშენე ქულების მთვლელი' },
        duration: 12,
        objectives: [{ en: 'Create and use variables', ka: 'შექმენი და გამოიყენე ცვლადები' }],
        content: [],
        quiz: [],
      },
      {
        id: '5-2',
        title: { en: 'User Input', ka: 'მომხმარებლის შეყვანა' },
        description: { en: 'Ask questions and use the answer in your programs', ka: 'დასვი კითხვები და გამოიყენე პასუხი პროგრამებში' },
        duration: 10,
        objectives: [{ en: 'Get input from users', ka: 'მიიღე მომხმარებლის შეყვანა' }],
        content: [],
        quiz: [],
      },
    ],
  },
  {
    id: 6,
    title: { en: 'Advanced Concepts', ka: 'მოწინავე კონცეპტები' },
    description: { en: 'Level up with cloning, custom blocks, and broadcasting', ka: 'აიმაღლე დონე კლონირებით, ბლოკებით და შეტყობინებებით' },
    icon: 'Zap',
    color: 'scratch-purple',
    lessons: [
      {
        id: '6-1',
        title: { en: 'Cloning & Broadcasting', ka: 'კლონირება და შეტყობინებები' },
        description: { en: 'Create copies of sprites and send messages between them', ka: 'შექმენი სპრაიტების ასლები და გაგზავნე შეტყობინებები' },
        duration: 15,
        objectives: [{ en: 'Use clone and broadcast blocks', ka: 'გამოიყენე კლონირების და შეტყობინების ბლოკები' }],
        content: [],
        quiz: [],
      },
      {
        id: '6-2',
        title: { en: 'Custom Blocks', ka: 'საკუთარი ბლოკები' },
        description: { en: 'Create your own reusable blocks with My Blocks', ka: 'შექმენი საკუთარი ბლოკები My Blocks-ით' },
        duration: 12,
        objectives: [{ en: 'Create custom blocks', ka: 'შექმენი საკუთარი ბლოკები' }],
        content: [],
        quiz: [],
      },
    ],
  },
  {
    id: 7,
    title: { en: 'Final Projects', ka: 'საბოლოო პროექტები' },
    description: { en: 'Put it all together with guided projects', ka: 'შეაერთე ყველაფერი გზამკვლევი პროექტებით' },
    icon: 'Trophy',
    color: 'scratch-cyan',
    lessons: [
      {
        id: '7-1',
        title: { en: 'Build a Game', ka: 'ააშენე თამაში' },
        description: { en: 'Create a complete catch game from scratch', ka: 'შექმენი სრული დაჭერის თამაში ნულიდან' },
        duration: 25,
        objectives: [{ en: 'Build a complete game project', ka: 'ააშენე სრული თამაშის პროექტი' }],
        content: [],
        quiz: [],
      },
      {
        id: '7-2',
        title: { en: 'Animated Story', ka: 'ანიმაციური ისტორია' },
        description: { en: 'Create an interactive animated story', ka: 'შექმენი ინტერაქტიული ანიმაციური ისტორია' },
        duration: 25,
        objectives: [{ en: 'Create an animated story with multiple scenes', ka: 'შექმენი ანიმაციური ისტორია მრავალი სცენით' }],
        content: [],
        quiz: [],
      },
    ],
  },
];

// Helper functions
export const getAllLessons = (): Lesson[] => chapters.flatMap((c) => c.lessons);

export const getLessonById = (id: string): Lesson | undefined =>
  getAllLessons().find((l) => l.id === id);

export const getChapterByLessonId = (id: string): Chapter | undefined =>
  chapters.find((c) => c.lessons.some((l) => l.id === id));

export const getAdjacentLessons = (id: string) => {
  const all = getAllLessons();
  const idx = all.findIndex((l) => l.id === id);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
};

export const getTotalLessons = (): number => getAllLessons().length;

export interface ShowcaseProject {
  id: string;
  title: BilingualText;
  description: BilingualText;
  scratchProjectId: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: BilingualText;
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'sp-1',
    title: { en: 'Chase Game', ka: 'დევნის თამაში' },
    description: {
      en: 'A fun game where you chase stars with the Scratch cat! Use arrow keys to move.',
      ka: 'სახალისო თამაში, სადაც Scratch კატით ვარსკვლავებს იჭერ! გამოიყენე ისრის კლავიშები.',
    },
    scratchProjectId: '10128407',
    difficulty: 'beginner',
    category: { en: 'Game', ka: 'თამაში' },
  },
  {
    id: 'sp-2',
    title: { en: 'Dance Party', ka: 'ცეკვის წვეულება' },
    description: {
      en: 'Make characters dance to music! Click the green flag and press different keys.',
      ka: 'პერსონაჟები აცეკვე მუსიკაზე! დააჭირე მწვანე დროშას და სხვადასხვა კლავიშებს.',
    },
    scratchProjectId: '267216894',
    difficulty: 'beginner',
    category: { en: 'Animation', ka: 'ანიმაცია' },
  },
  {
    id: 'sp-3',
    title: { en: 'Maze Explorer', ka: 'ლაბირინთის მკვლევარი' },
    description: {
      en: 'Navigate through a tricky maze! Can you find your way to the end?',
      ka: 'გაიარე რთული ლაბირინთი! შეძლებ ბოლომდე მისვლას?',
    },
    scratchProjectId: '119615668',
    difficulty: 'intermediate',
    category: { en: 'Game', ka: 'თამაში' },
  },
  {
    id: 'sp-4',
    title: { en: 'Drawing App', ka: 'სახატავი აპი' },
    description: {
      en: 'Create your own digital artwork! Use the mouse to draw on the stage.',
      ka: 'შექმენი ციფრული ნამუშევარი! გამოიყენე მაუსი სცენაზე ხატვისთვის.',
    },
    scratchProjectId: '284950146',
    difficulty: 'intermediate',
    category: { en: 'Creative', ka: 'კრეატიული' },
  },
  {
    id: 'sp-5',
    title: { en: 'Platformer Game', ka: 'პლატფორმერ თამაში' },
    description: {
      en: 'Jump between platforms and collect coins in this exciting game!',
      ka: 'გადახტი პლატფორმებზე და შეაგროვე მონეტები ამ საინტერესო თამაშში!',
    },
    scratchProjectId: '10128407',
    difficulty: 'advanced',
    category: { en: 'Game', ka: 'თამაში' },
  },
];
