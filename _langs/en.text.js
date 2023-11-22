var lang = {
    error:{
        communication: 'Communication problems',
        getFileFromBoiler: 'Unable to retrieve the files on the boiler',
        maj: 'Update failed',
        csvImport: "Import failed",
        summary: 'Unprocessed synthesis',
        ipNotPing: "Ip address is not responding",
        configNotSave: 'Configuration not saved',
        csvNotFound: "Reference CSV file not found",
        getSeasons: 'Recovering seasons problem',
        saveSeason: "Season Recording problem",
        seasonAlreadyExist: 'Warning, this season already exists !',
        deleteSeason: 'Season delete probleme',
        getEvents: "Event recovery problem",
        saveEvent: "Event Saving problem",
        deleteEvent: "Event deleting problem",
        date: 'Incorrect date format',
        dateInvert: 'The start date must be less than the end date',
        save: 'save problem',
        position: 'Unable to retrieve the last position',
        grapehAlreadyExist: 'Warning, chart already exists !',
        deleteGraphe: "Chert deleting probleme",
        assoAlreadyExist: "Warning, the chart + Sensor pair already exists",
        coeffMustBeNumber: "The coefficient must be a number",
        update: "update problem",
        deleteAsso: "Removing association problem",
        getGraphe: "Cannot load chart list",
        getAsso: "Cannot load associations list",
        getSensor: "Unable to retrieve sensors list",
        getIndicByMonth: "Problem when retrieving indicators for the month",
        getSiloStatus: "Retrieving storage tank status problem",
        getTotalSaison: "Retrieving season indicators problem",
        getSyntheseSaison: "Retrieving summary of the season problem",
        bddFail: "Database connection failed",
        passNotChanged: "Password unchanged !",
        passNotTheSame: "The two fields are not identical.",
        userPassIncorrect: "User/password incorrect",
        sessionEnded: 'Session timed out',
        connectBoiler: 'Connection failure (boiler)',
        getListConfigBoiler: 'Unable to retrieve configurations list',
        commentConfigBoiler: 'Description must not be empty',
        saveBoilerConfig: 'Unable to save configuration',
        deleteBoilerConfig: 'Deletie failed',
        deleteMatrix : "Matrix delete Failed"
    },
    valid:{
        communication: 'Communication established',
        maj: 'Update successfully completed',
        csvImport: 'Successful import',
        summary: 'Successful summary',
        configSave: 'Configuration saved',
        save: 'recording completed',
        update: 'Successful update',
        delete: 'Successful deletion',
        applyConfigboiler: 'Configuration applied to the boiler'
    },
    text:{
        seeFileOnboiler: 'View Boiler files',
        addSeason: "Add Season",
        updateSeason: 'Modify season',
        deleteSeason: 'Do you confirm the season deletion',
        addEvent: "Add event",
        updateEvent: "Modify event",
        deleteEvent: "Do you confirm the event deletion",        
        eventTypePellets: "Filling storage tank",
        eventTypeAshes: "Emptying the ashtray",
        eventTypeMaintenance: "Boiler maintenance",
        eventTypeChimneySweeping: "Chimney sweep",
        eventTypeBag: "Addition of pellets bags",        
        eventPelletsdetails: "{0} kg, {1}€ ({2}€/T)",
        eventBagDetails: "{0} kg, {1}€ ({2}€/15Kg)",
        eventmaintenanceDetails: "{0}€",
        firstSetup: 'No values are available from your boiler yet. Check your installation parameters (Matrix CSV reading)',
        addGraphe: "Create new chart",
        updateGraphe: 'Modidy',
        deleteGraphe: 'Do you confirm deletion of ',
        updateAsso: "Modify association",
        deleteAsso: "Do you confirm association deletion",
        titreHisto: 'Monthly summary',
        estimatedEmptyDate: 'Estimated date empty storage tank : {0}',
        estimationReliability: "Estimate based on historical consumption. Reliability : {0}%",
        no_silo_size: 'To know the filling status of your storagoe tank, please enter its capacity <a href="adminParam.php">in parameters</a>',
        no_fill_date_for_silo: 'To know you storage tank store state, please define <a href="adminEvents.php">the last filling</a>',
        updateAvailable: 'A new version is available ! go to About page !'
    },
    graphic:{
        thousandsSep: ' ',
        decimalPoint: ',',
        months: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
        shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
        weekdays: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        day: 'day',
        month: 'month',
        hour: 'Hour',
        tc: 'T°C',
        kgAndDju: 'Kg and DJU',
        nbCycle: 'Cycle nb',
        seasonSummary: "Season summary",
        loading : 'Loading data from boiler...'
    }
};
    
