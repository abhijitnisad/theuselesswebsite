const uselessWebsites = [
    "https://thezen.zone",
    "https://smashthewalls.com",
    "https://pointerpointer.com",
    "https://quickdraw.withgoogle.com",
    "https://www.bouncingdvdlogo.com",
    "https://puginarug.com",
    "https://cat-bounce.com",
    "http://www.staggeringbeauty.com",
    "https://thatsthefinger.com",
    "https://cant-not-tweet-this.com",
    "http://corndog.io",
    "http://www.republiquedesmangues.fr",
    "https://longdogechallenge.com",
    "http://papertoilet.com/",
    "http://eelslap.com/",
    "http://endless.horse/",
    "https://jacksonpollock.org/",
    "http://tinytuba.com/",
    "https://checkboxrace.com/",
    "http://www.donothingfor2minutes.com/",
    "https://findtheinvisiblecow.com/",
    "https://hackertyper.com/",
    "https://zoomquilt.org/",
    "https://www.trashloop.com/",
    "https://onesquareminesweeper.com/",
    "http://heeeeeeeey.com/",
    "http://corndogoncorndog.com/",
    "https://www.everydayim.com/",
    "http://www.fallingfalling.com/",
    "https://trypap.com/"
];

// @desc    Get a random useless website
// @route   GET /api/random
// @access  Public
export const getRandomWebsite = (req, res, next) => {
    try {
        const randomIndex = Math.floor(Math.random() * uselessWebsites.length);
        const randomSite = uselessWebsites[randomIndex];
        res.status(200).json({
            success: true,
            url: randomSite
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Add a new useless website
// @route   POST /api/random
// @access  Public
export const addUselessWebsite = (req, res, next) => {
    try {
        const { url } = req.body;
        
        if (!url) {
            return res.status(400).json({ success: false, message: 'URL is required' });
        }
        
        uselessWebsites.push(url);
        
        res.status(201).json({
            success: true,
            message: 'Website added successfully',
            url: url
        });
    } catch (error) {
        next(error);
    }
};
