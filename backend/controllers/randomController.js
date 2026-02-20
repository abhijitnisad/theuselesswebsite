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
    "https://eelslap.com",
    "http://www.republiquedesmangues.fr",
    "https://jacksonpollock.org",
    "https://longdogechallenge.com",
    "http://papertoilet.com/",
    // Adding newly fetched useless websites
    "https://theuselessweb.site/CoronaVirusNinja/",
    "https://anotheruseless.website/lookadeadfly/",
    "https://anotheruseless.website/drunkronswanson/",
    "https://anotheruseless.website/talk-to-my-ass/",
    "https://anotheruseless.website/cant-sleep/",
    "https://anotheruseless.website/the-end-of-the-internet/",
    "https://anotheruseless.website/broof/",
    "https://anotheruseless.website/screaming-goat-piano/",
    "https://anotheruseless.website/shame-bell/",
    "https://anotheruseless.website/8-bit-dance/",
    "https://anotheruseless.website/colour-squares/",
    "https://anotheruseless.website/crapola/",
    "https://anotheruseless.website/salmon-of-capistrano/",
    "https://anotheruseless.website/more-cowbell/",
    "https://anotheruseless.website/buzzybuzz/",
    "https://anotheruseless.website/build-shruggie/",
    "https://theuselessweb.site/plspetdoge/",
    "https://theuselessweb.site/oppositeofpoop/",
    "https://theuselessweb.site/boohbah-zone/",
    "https://theuselessweb.site/instantostrich/",
    "https://theuselessweb.site/geodude/",
    "https://theuselessweb.site/cuteroulette/",
    "https://theuselessweb.site/infinitefrogs/",
    "https://theuselessweb.site/agitatedchicken/",
    "https://theuselessweb.site/wwwdotcom/",
    "https://theuselessweb.site/ducksarethebest.com/",
    "https://theuselessweb.site/grandpanoclothes.com/",
    "https://theuselessweb.site/poop.bike/",
    "https://theuselessweb.site/whatdoineed/",
    "https://theuselessweb.site/thanksobama/",
    "https://theuselessweb.site/retrolamp/",
    "https://theuselessweb.site/dumbcalculator/",
    "https://theuselessweb.site/interactive-triangualation/",
    "https://theuselessweb.site/Death%20note%20type%20game/",
    "https://theuselessweb.site/Successful%20Troll/",
    "https://theuselessweb.site/Danzorz/",
    "https://theuselessweb.site/Flight%20of%20the%20Hamsters/",
    "https://theuselessweb.site/Virtual%20Stapler/",
    "https://theuselessweb.site/tunnelsnakes/",
    "https://theuselessweb.site/annoyingdog/",
    "https://theuselessweb.site/blueballmachine/",
    "https://theuselessweb.site/kittencannon/",
    "https://theuselessweb.site/faceofdisapproval/",
    "https://theuselessweb.site/omglasergunspewpewpew/",
    "https://theuselessweb.site/toastybutton/",
    "https://theuselessweb.site/wafflecat/",
    "https://anotheruseless.website/falling-guy/",
    "https://theuselessweb.site/flyguy/",
    "https://theuselessweb.site/patience-is-a-virtue/",
    "https://theuselessweb.site/whitetrash/",
    "https://theuselessweb.site/pixelsfighting/",
    "https://theuselessweb.site/isitwhite/",
    "https://theuselessweb.site/onemillionlols/",
    "https://theuselessweb.site/chihuahuaspin/",
    "https://theuselessweb.site/ismycomputeron/",
    "https://theuselessweb.site/iamawesome/",
    "https://theuselessweb.site/electricboogiewoogie/",
    "https://theuselessweb.site/unicodesnowmanforyou/",
    "https://theuselessweb.site/tencentsinfo/",
    "https://theuselessweb.site/leekspin.com/",
    "https://theuselessweb.site/ninjaflex/",
    "https://theuselessweb.site/imaninja/",
    "https://theuselessweb.site/ouaismaisbon/",
    "https://theuselessweb.site/hasthelargehadroncolliderdestroyedtheworldyet.com/",
    "https://theuselessweb.site/fallingfalling/",
    "https://theuselessweb.site/randomcolour.com/",
    "https://theuselessweb.site/r33b.net/",
    "https://theuselessweb.site/crouton/",
    "https://theuselessweb.site/dottedlines/",
    "https://theuselessweb.site/thebestdinosaur/",
    "https://theuselessweb.site/www.everydayim.com/",
    "https://theuselessweb.site/www.sanger.dk/",
    "https://theuselessweb.site/bees/",
    "https://theuselessweb.site/tiling/",
    "https://theuselessweb.site/tr-8r/",
    "https://theuselessweb.site/hemansings/",
    "https://theuselessweb.site/fanfare/",
    "https://theuselessweb.site/puppytwister/",
    "https://theuselessweb.site/youareanidiot/",
    "https://theuselessweb.site/solitaire/",
    "https://theuselessweb.site/exactcenteroftheinternet/",
    "https://theuselessweb.site/deepblackhole/",
    "https://theuselessweb.site/skulltrumpet/",
    "https://theuselessweb.site/puppytummy/",
    "https://theuselessweb.site/riddlydiddly/",
    "https://theuselessweb.site/BecauseWhy/",
    "https://theuselessweb.site/walama/",
    "https://theuselessweb.site/dramabutton/",
    "https://theuselessweb.site/hereistoday/",
    "https://theuselessweb.site/spaceis.cool/",
    "https://theuselessweb.site/khaaan/",
    "https://theuselessweb.site/nooooooooooooooo/",
    "https://theuselessweb.site/hiyoooo/",
    "https://theuselessweb.site/shtuff/",
    "https://theuselessweb.site/tomsdog/",
    "https://theuselessweb.site/leglesslegolegolas/",
    "https://theuselessweb.site/lifeisnotfair/",
    "https://theuselessweb.site/something/",
    "https://theuselessweb.site/randomdoh/",
    "https://theuselessweb.site/comingupmilhouse/",
    "https://theuselessweb.site/purple/",
    "https://theuselessweb.site/stagnationmeansdecline/",
    "https://theuselessweb.site/wewillattack/",
    "https://theuselessweb.site/pleasetouchme/",
    "https://theuselessweb.site/everythingyouseeisinthepast/",
    "https://theuselessweb.site/nosquito/",
    "https://theuselessweb.site/vaiavanti/",
    "https://theuselessweb.site/futurephysics/",
    "https://theuselessweb.site/popcornpainting/",
    "https://theuselessweb.site/coldvoid/",
    "https://theuselessweb.site/invisiblecursor/",
    "https://theuselessweb.site/tinycursor/",
    "https://theuselessweb.site/aestheticecho/",
    "https://theuselessweb.site/beefchickenpork/",
    "https://theuselessweb.site/annoyingcursor/",
    "https://theuselessweb.site/hotdoom/",
    "https://theuselessweb.site/closedshut/",
    "https://theuselessweb.site/tothewater/",
    "https://theuselessweb.site/flaminglog/",
    "https://theuselessweb.site/yesforsure.com/",
    "https://theuselessweb.site/inceptionbutton/",
    "https://theuselessweb.site/niceonedad/",
    "https://theuselessweb.site/nootnoot/",
    "https://theuselessweb.site/youhaveautism/",
    "https://theuselessweb.site/ffffidget/"
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
