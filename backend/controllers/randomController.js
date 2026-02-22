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
    "https://trypap.com/",
    "https://chrismckenzie.com/",
    "https://crouton.net/",
    "http://ouaismaisbon.ch/",
    "http://ninjaflex.com/",
    "http://ihasabucket.com/",
    "http://www.ismycomputeron.com/",
    "http://www.nullingthevoid.com/",
    "http://www.muchbetterthanthis.com/",
    "http://www.yesnoif.com/",
    "http://iamawesome.com/",
    "http://www.blankwindows.com/",
    "http://dogs.are.the.most.moe/",
    "http://tencents.info/",
    "http://www.patience-is-a-virtue.org/",
    "http://whitetrash.nl/",
    "http://www.theendofreason.com/",
    "http://oct82.com/",
    "http://burymewithmymoney.com/",
    "http://movenowthinklater.com/",
    "http://www.partridgegetslucky.com/"
];

// @desc    Get a random useless website
// @route   GET /api/random
// @access  Public
export const getRandomWebsite = (req, res, next) => {
    try {
        let visitedUrls = [];
        if (req.query.visited) {
            try {
                visitedUrls = JSON.parse(req.query.visited);
            } catch (e) {
                // Ignore parsing errors
            }
        }
        
        let availableWebsites = uselessWebsites.filter(site => !visitedUrls.includes(site));
        let resetCache = false;
        
        if (availableWebsites.length === 0) {
            availableWebsites = uselessWebsites;
            resetCache = true;
        }

        const randomIndex = Math.floor(Math.random() * availableWebsites.length);
        const randomSite = availableWebsites[randomIndex];
        res.status(200).json({
            success: true,
            url: randomSite,
            resetCache: resetCache
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
