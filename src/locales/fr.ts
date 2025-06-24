
export const fr = {
    common: {
        appName: "SACCO Connect",
        adminAppName: "Admin SACCO",
        description: "Votre partenaire de confiance pour la croissance financière.",
        login: "Connexion",
        signup: "S'inscrire",
        logout: "Déconnexion",
        profile: "Profil",
        settings: "Paramètres",
        dashboard: "Tableau de bord",
        users: "Utilisateurs",
        loans: "Prêts",
        withdrawals: "Retraits",
        support: "Support",
        language: "Langue",
        actions: "Actions",
        status: "Statut",
        amount: "Montant",
        date: "Date",
        save: "Enregistrer",
        submit: "Soumettre",
        cancel: "Annuler",
        view: "Voir",
        months: "mois",
        phone: "Numéro de téléphone",
        name: "Nom",
        subject: "Sujet",
        message: "Message",
        or: "ou"
    },
    login: {
        title: "Connexion",
        description: "Entrez votre numéro de téléphone et votre ID pour vous connecter",
        phoneLabel: "Numéro de téléphone ou code admin",
        phonePlaceholder: "07... ou {saccomoney}",
        idLabel: "Carte d'identité rwandaise",
        idPlaceholder: "11990...",
        forgotId: "ID oublié ?",
        loginButton: "Se connecter",
        signupPrompt: "Vous n'avez pas de compte ?",
    },
    signup: {
        title: "S'inscrire",
        description: "Entrez vos informations pour créer votre compte",
        phoneLabel: "Numéro de téléphone",
        phonePlaceholder: "07...",
        idLabel: "Carte d'identité rwandaise",
        idPlaceholder: "11990...",
        continueButton: "Continuer",
        loginPrompt: "Vous avez déjà un compte ?",
        verifyTitle: "Vérifiez votre téléphone",
        verifyDescription: "Entrez le code à 6 chiffres envoyé à {{phoneNumber}}",
        verifyCodeLabel: "Code de vérification",
        verifyCodePlaceholder: "123456",
        verifyButton: "Vérifier et créer un compte",
        goBackButton: "Retour"
    },
    dashboard: {
        pageTitle: "Tableau de bord",
        withdrawFunds: "Retirer des fonds",
        applyForLoan: "Demander un prêt",
        cards: {
            balance: "Solde du compte",
            balanceDesc: "+20.1% depuis le mois dernier",
            activeLoan: "Prêt actif",
            activeLoanDesc: "Prochain paiement : 30 juillet 2024",
            totalSavings: "Épargne totale",
            totalSavingsDesc: "+19% depuis le mois dernier",
            referrals: "Parrainages",
            referralsDesc: "+2 depuis la semaine dernière"
        },
        transactions: {
            title: "Transactions récentes",
            description: "Une liste de vos transactions récentes.",
            type: "Type",
            descHeader: "Description",
            loanDisbursement: "Décaissement du prêt",
            savingsDeposit: "Dépôt d'épargne mensuel",
            withdrawalMomo: "Retrait - MTN MoMo",
            loanRepayment: "Remboursement de prêt",
            withdrawalAirtel: "Retrait - Airtel Money",
            deposit: "Dépôt",
            withdrawal: "Retrait"
        },
        chart: {
            title: "Aperçu du compte",
            description: "Votre activité de compte au cours de l'année."
        },
        layout: {
            helpTitle: "Besoin d'aide ?",
            helpDescription: "Contactez notre équipe de support si vous avez des questions.",
            contactSupport: "Contacter le support",
            accountMenu: "Mon compte"
        }
    },
    loans: {
        pageTitle: "Mes prêts",
        apply: "Demander un nouveau prêt",
        history: "Historique des prêts",
        historyDescription: "Une liste de vos demandes de prêt et leur statut.",
        dateRequested: "Date de la demande",
        term: "Durée",
        status: {
            approved: "Approuvé",
            pending: "En attente",
            rejected: "Rejeté",
            paidOff: "Remboursé"
        },
        application: {
            title: "Nouvelle demande de prêt",
            description: "Remplissez les détails ci-dessous pour demander un nouveau prêt. Votre demande sera examinée par notre équipe.",
            amountLabel: "Montant (RWF)",
            repaymentLabel: "Remboursement",
            repaymentPlaceholder: "Sélectionnez la période de remboursement",
            repayment3: "3 Mois",
            repayment6: "6 Mois",
            repayment12: "12 Mois",
            repayment24: "24 Mois",
            submit: "Soumettre la demande"
        },
        contract: {
            title: "Contrat de prêt",
            description: "Ceci est un aperçu de votre contrat de prêt. Veuillez le lire attentivement.",
            button: "Contrat",
            download: "Télécharger en PDF",
            downloading: "Téléchargement..."
        }
    },
    withdraw: {
        pageTitle: "Retirer des fonds",
        form: {
            title: "Nouveau retrait",
            description: "Demandez un retrait sur votre compte d'argent mobile enregistré (0788123456).",
            amountLabel: "Montant (RWF)",
            amountPlaceholder: "Entrez le montant",
            button: "Demander le retrait"
        },
        history: {
            title: "Historique des retraits",
            description: "Vos demandes de retrait récentes.",
            method: "Méthode",
            status: {
                completed: "Terminé",
                pending: "En attente",
                failed: "Échoué"
            }
        }
    },
    support: {
        pageTitle: "Centre de support",
        createTicket: "Créer un nouveau ticket",
        table: {
            title: "Mes tickets de support",
            description: "Une liste de vos demandes de support."
        },
        ticket: {
            title: "Nouveau ticket de support",
            description: "Décrivez votre problème ci-dessous. Notre équipe de support vous répondra sous peu.",
            subjectPlaceholder: "ex: Problème de retrait",
            messagePlaceholder: "Veuillez fournir des détails sur votre problème...",
            submit: "Soumettre le ticket"
        },
        status: {
            open: "Ouvert",
            closed: "Fermé"
        }
    },
    admin: {
        dashboard: {
            pageTitle: "Tableau de bord admin",
            cards: {
                totalUsers: "Utilisateurs totaux",
                usersDesc: "+12 depuis la semaine dernière",
                totalLoans: "Valeur totale des prêts",
                loansDesc: "Valeur des prêts actifs",
                totalSavings: "Épargne totale",
                savingsDesc: "De tous les membres",
                pending: "Approbations en attente",
                pendingDesc: "En attente d'examen"
            },
            pendingLoans: {
                title: "Demandes de prêt en attente",
                description: "Examinez et approuvez ou rejetez les nouvelles demandes de prêt."
            },
            recentUsers: {
                title: "Inscriptions récentes",
                description: "Nouveaux membres qui ont rejoint cette semaine.",
                joinedOn: "Inscrit le {{date}}"
            },
            layout: {
                account: "Compte Admin"
            }
        },
        users: {
            pageTitle: "Gérer les utilisateurs",
            cardTitle: "Tous les utilisateurs",
            cardDescription: "Affichez, modifiez ou gérez les comptes utilisateurs.",
            phone: "Numéro de téléphone",
            id: "ID rwandais",
            dateJoined: "Date d'inscription",
            actions: {
                title: "Actions",
                deposit: "Déposer",
                withdraw: "Retirer",
                depositDialogTitle: "Effectuer un dépôt",
                withdrawDialogTitle: "Effectuer un retrait",
                dialogDescription: "Entrez le montant à {{action}} pour {{name}} ({{phone}}).",
                amountLabel: "Montant (RWF)",
                amountPlaceholder: "Entrez le montant",
                successTitle: "Action réussie",
                successDesc: "Le {{action}} de {{amount}} RWF pour {{name}} a été traité avec succès.",
                invalidAmountTitle: "Montant invalide",
                invalidAmountDesc: "Veuillez entrer un montant valide.",
                verificationTitle: "Vérifier la transaction",
                verificationDescription: "Un code à 6 chiffres a été envoyé au téléphone de {{name}}. Veuillez le saisir ci-dessous pour confirmer le {{action}} de {{amount}} RWF.",
                verificationCodeLabel: "Code de vérification",
                verificationCodePlaceholder: "123456",
                continueButton: "Continuer",
                codeSentTitle: "Code envoyé",
                codeSentDesc: "Un code de vérification a été envoyé au téléphone de l'utilisateur.",
                invalidCodeTitle: "Code invalide",
                invalidCodeDesc: "Le code de vérification est incorrect. Veuillez réessayer."
            }
        },
        loans: {
            pageTitle: "Gérer les prêts",
            cardTitle: "Toutes les demandes de prêt",
            cardDescription: "Affichez et gérez toutes les demandes de prêt.",
        },
        settings: {
            pageTitle: "Paramètres SACCO",
            cardTitle: "Configuration des prêts",
            cardDescription: "Définissez les paramètres globaux pour les nouveaux prêts.",
            interestRate: "Taux d'intérêt (%)",
            maxLoan: "Montant maximum du prêt (RWF)",
            repaymentTerms: "Périodes de remboursement par défaut (Mois)",
            repaymentPlaceholder: "ex: 3, 6, 12, 24",
            save: "Enregistrer les paramètres"
        }
    }
}
