
export const rw = {
    common: {
        appName: "SACCO Connect",
        adminAppName: "Umuyobozi SACCO",
        description: "Uwo twifatanya wizewe mu iterambere ry'ubukungu.",
        login: "Injira",
        signup: "Iyandikishe",
        logout: "Sohoka",
        profile: "Umwirondoro",
        settings: "Igenamiterere",
        dashboard: "Imbonerahamwe",
        users: "Abakoresha",
        loans: "Inguzanyo",
        withdrawals: "Kubikuza",
        support: "Ubufasha",
        language: "Ururimi",
        actions: "Ibikorwa",
        status: "Uko bihagaze",
        amount: "Umubare",
        date: "Itariki",
        save: "Bika",
        submit: "Emeza",
        cancel: "Hagarika",
        view: "Reba",
        months: "amezi",
        phone: "Nimero ya telefone",
        name: "Izina",
        subject: "Ingingo",
        message: "Ubutumwa",
        or: "cyangwa"
    },
    login: {
        title: "Injira",
        description: "Injiza nimero ya telefone n'indangamuntu yawe kugirango winjire",
        phoneLabel: "Nimero ya Telefone cyangwa Kode y'Umuyobozi",
        phonePlaceholder: "07... cyangwa {saccomoney}",
        idLabel: "Indangamuntu",
        idPlaceholder: "11990...",
        forgotId: "Wibagiwe indangamuntu?",
        loginButton: "Injira",
        signupPrompt: "Nta konti ufite?",
    },
    signup: {
        title: "Iyandikishe",
        description: "Injiza amakuru yawe kugirango ufungure konti",
        phoneLabel: "Nimero ya telefone",
        phonePlaceholder: "07...",
        idLabel: "Indangamuntu",
        idPlaceholder: "11990...",
        continueButton: "Komeza",
        loginPrompt: "Usanganywe konti?",
        verifyTitle: "Emeza Telefone Yawe",
        verifyDescription: "Injiza kode y'imibare 6 yoherejwe kuri {{phoneNumber}}",
        verifyCodeLabel: "Kode yo kwemeza",
        verifyCodePlaceholder: "123456",
        verifyButton: "Emeza & Fungura Konti",
        goBackButton: "Subira inyuma"
    },
    dashboard: {
        pageTitle: "Imbonerahamwe",
        withdrawFunds: "Bikuza amafaranga",
        applyForLoan: "Saba inguzanyo",
        cards: {
            balance: "Amafaranga ariho",
            balanceDesc: "+20.1% uvuye ukwezi gushize",
            activeLoan: "Inguzanyo igikora",
            activeLoanDesc: "Kwishyura gutaha: Nyakanga 30, 2024",
            totalSavings: "Ubwizigame bwose",
            totalSavingsDesc: "+19% uvuye ukwezi gushize",
            referrals: "Abatumirwa",
            referralsDesc: "+2 kuva icyumweru gishize"
        },
        transactions: {
            title: "Ibikorwa biheruka",
            description: "Urutonde rw'ibikorwa byawe biheruka.",
            type: "Ubwoko",
            descHeader: "Ibisobanuro",
            loanDisbursement: "Gutanga inguzanyo",
            savingsDeposit: "Ubwizigame bwa buri kwezi",
            withdrawalMomo: "Kubikuza - MTN MoMo",
            loanRepayment: "Kwishyura inguzanyo",
            withdrawalAirtel: "Kubikuza - Airtel Money",
            deposit: "Kubitsa",
            withdrawal: "Kubikuza"
        },
        chart: {
            title: "Inshamake ya Konti",
            description: "Ibikorwa bya konti yawe mu mwaka."
        },
        layout: {
            helpTitle: "Ukeneye ubufasha?",
            helpDescription: "Hamagara itsinda ryacu ry'ubufasha niba ufite ibibazo.",
            contactSupport: "Vugisha ubufasha",
            accountMenu: "Konti yanjye"
        }
    },
    loans: {
        pageTitle: "Inguzanyo zanjye",
        apply: "Saba inguzanyo nshya",
        history: "Amateka y'inguzanyo",
        historyDescription: "Urutonde rw'ibisabe byawe by'inguzanyo n'uko bihagaze.",
        dateRequested: "Itariki wasabiye",
        term: "Igihe",
        status: {
            approved: "Byemejwe",
            pending: "Bitegereje",
            rejected: "Byanzwe",
            paidOff: "Byarishyuwe"
        },
        application: {
            title: "Gusaba inguzanyo nshya",
            description: "Uzuza amakuru hano hasi kugirango usabe inguzanyo nshya. Icyifuzo cyawe kizasuzumwa n'ikipe yacu.",
            amountLabel: "Umubare (RWF)",
            repaymentLabel: "Kwishyura",
            repaymentPlaceholder: "Hitamo igihe cyo kwishyura",
            repayment3: "Amezi 3",
            repayment6: "Amezi 6",
            repayment12: "Amezi 12",
            repayment24: "Amezi 24",
            submit: "Emeza icyifuzo"
        },
        contract: {
            title: "Amasezerano y'inguzanyo",
            description: "Iyi ni incamake y'amasezerano yawe y'inguzanyo. Turagusaba kuyisoma witonze.",
            button: "Amasezerano",
            download: "Manura PDF",
            downloading: "Bimanurwa..."
        }
    },
    withdraw: {
        pageTitle: "Bikuza Amafaranga",
        form: {
            title: "Kubikuza gushya",
            description: "Saba kubikuza kuri konti yawe ya mobile money yanditse (0788123456).",
            amountLabel: "Umubare (RWF)",
            amountPlaceholder: "Injiza umubare",
            button: "Saba kubikuza"
        },
        history: {
            title: "Amateka yo kubikuza",
            description: "Ibyifuzo byawe biheruka byo kubikuza.",
            method: "Uburyo",
            status: {
                completed: "Byarangiye",
                pending: "Bitegereje",
                failed: "Byananiranye"
            }
        }
    },
    support: {
        pageTitle: "Ikigo cy'Ubufasha",
        createTicket: "Kora itike nshya",
        table: {
            title: "Amatike yanjye y'ubufasha",
            description: "Urutonde rw'ibyifuzo byawe by'ubufasha."
        },
        ticket: {
            title: "Itike nshya y'ubufasha",
            description: "Sobanura ikibazo cyawe hano hasi. Itsinda ryacu rizagusubiza vuba.",
            subjectPlaceholder: "Urugero: Ikibazo cyo kubikuza",
            messagePlaceholder: "Tanga amakuru arambuye ku kibazo cyawe...",
            submit: "Emeza itike"
        },
        status: {
            open: "Ifunguye",
            closed: "Ifunze"
        }
    },
    admin: {
        dashboard: {
            pageTitle: "Imbonerahamwe y'umuyobozi",
            cards: {
                totalUsers: "Abakoresha bose",
                usersDesc: "+12 kuva icyumweru gishize",
                totalLoans: "Agaciro k'inguzanyo zose",
                loansDesc: "Agaciro k'inguzanyo zikora",
                totalSavings: "Ubwizigame bwose",
                savingsDesc: "Mu banyamuryango bose",
                pending: "Ibyemezo bitegerejwe",
                pendingDesc: "Bitegereje isuzuma"
            },
            pendingLoans: {
                title: "Ibyifuzo by'inguzanyo bitegereje",
                description: "Suzuma wemeze cyangwa wange ibyifuzo bishya by'inguzanyo."
            },
            recentUsers: {
                title: "Abiyandikishije vuba",
                description: "Abanyamuryango bashya binjiye muri iki cyumweru.",
                joinedOn: "Yinjiye ku wa {{date}}"
            },
            layout: {
                account: "Konti y'Umuyobozi"
            }
        },
        users: {
            pageTitle: "Gucunga abakoresha",
            cardTitle: "Abakoresha bose",
            cardDescription: "Reba, hindura, cyangwa ucunge konti z'abakoresha.",
            phone: "Nimero ya telefone",
            id: "Indangamuntu",
            dateJoined: "Itariki yinjiriye",
            actions: {
                title: "Ibikorwa",
                deposit: "Kubitsa",
                withdraw: "Kubikuza",
                depositDialogTitle: "Kora Ububiko",
                withdrawDialogTitle: "Kora ikubikuza",
                dialogDescription: "Shyiramo umubare wo {{action}} kuri {{name}} ({{phone}}).",
                amountLabel: "Umubare (RWF)",
                amountPlaceholder: "Shyiramo umubare",
                successTitle: "Igikorwa Cyagenze neza",
                successDesc: "Igikorwa cya {{action}} cy'amafaranga {{amount}} RWF kuri {{name}} cyakozwe neza.",
                invalidAmountTitle: "Umubare utemewe",
                invalidAmountDesc: "Nyamuneka shyiramo umubare wemewe.",
                verificationTitle: "Emeza Igikorwa",
                verificationDescription: "Kode y'imibare 6 yoherejwe kuri telefone ya {{name}}. Nyamuneka yinjize hano hepfo kugirango wemeze {{action}} y'amafaranga {{amount}} RWF.",
                verificationCodeLabel: "Kode yo Kwemeza",
                verificationCodePlaceholder: "123456",
                continueButton: "Komeza",
                codeSentTitle: "Kode Yoherejwe",
                codeSentDesc: "Kode yo kwemeza yoherejwe kuri telefone y'umukoresha.",
                invalidCodeTitle: "Kode Yemejwe Ntabwo Ariyo",
                invalidCodeDesc: "Kode yo kwemeza ntabwo ariyo. Nyamuneka gerageza nanone."
            }
        },
        loans: {
            pageTitle: "Gucunga inguzanyo",
            cardTitle: "Ibyifuzo by'inguzanyo byose",
            cardDescription: "Reba kandi ucunge ibyifuzo byose by'inguzanyo.",
        },
        settings: {
            pageTitle: "Igenamiterere rya SACCO",
            cardTitle: "Igenamiterere ry'inguzanyo",
            cardDescription: "Shyiraho ibipimo rusange by'inguzanyo nshya.",
            interestRate: "Inyungu (%)",
            maxLoan: "Inguzanyo ntarengwa (RWF)",
            repaymentTerms: "Ibihe byo kwishyura bisanzwe (Amezi)",
            repaymentPlaceholder: "urugero, 3, 6, 12, 24",
            save: "Bika Igenamiterere"
        }
    }
}
