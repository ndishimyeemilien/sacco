
export const en = {
    common: {
        appName: "SACCO Connect",
        adminAppName: "SACCO Admin",
        description: "Your trusted partner in financial growth.",
        login: "Login",
        signup: "Sign up",
        logout: "Logout",
        profile: "Profile",
        settings: "Settings",
        dashboard: "Dashboard",
        users: "Users",
        loans: "Loans",
        withdrawals: "Withdrawals",
        support: "Support",
        language: "Language",
        actions: "Actions",
        status: "Status",
        amount: "Amount",
        date: "Date",
        save: "Save",
        submit: "Submit",
        cancel: "Cancel",
        view: "View",
        months: "months",
        phone: "Phone Number",
        name: "Name",
        subject: "Subject",
        message: "Message",
        or: "or"
    },
    login: {
        title: "Login",
        description: "Enter your phone number and ID to login",
        phoneLabel: "Phone Number or Admin Code",
        phonePlaceholder: "07... or {saccomoney}",
        idLabel: "Rwandan ID Card",
        idPlaceholder: "11990...",
        forgotId: "Forgot your ID?",
        loginButton: "Login",
        signupPrompt: "Don't have an account?",
    },
    signup: {
        title: "Sign Up",
        description: "Enter your details to create your account",
        phoneLabel: "Phone Number",
        phonePlaceholder: "07...",
        idLabel: "Rwandan ID Card",
        idPlaceholder: "11990...",
        continueButton: "Continue",
        loginPrompt: "Already have an account?",
        verifyTitle: "Verify Your Phone",
        verifyDescription: "Enter the 6-digit code sent to {{phoneNumber}}",
        verifyCodeLabel: "Verification Code",
        verifyCodePlaceholder: "123456",
        verifyButton: "Verify & Create Account",
        goBackButton: "Go Back"
    },
    dashboard: {
        pageTitle: "Dashboard",
        withdrawFunds: "Withdraw Funds",
        applyForLoan: "Apply for Loan",
        cards: {
            balance: "Account Balance",
            balanceDesc: "+20.1% from last month",
            activeLoan: "Active Loan",
            activeLoanDesc: "Next payment: July 30, 2024",
            totalSavings: "Total Savings",
            totalSavingsDesc: "+19% from last month",
            referrals: "Referrals",
            referralsDesc: "+2 since last week"
        },
        transactions: {
            title: "Recent Transactions",
            description: "A list of your recent transactions.",
            type: "Type",
            descHeader: "Description",
            loanDisbursement: "Loan Disbursement",
            savingsDeposit: "Monthly Savings Deposit",
            withdrawalMomo: "Withdrawal - MTN MoMo",
            loanRepayment: "Loan Repayment",
            withdrawalAirtel: "Withdrawal - Airtel Money",
            deposit: "Deposit",
            withdrawal: "Withdrawal"
        },
        chart: {
            title: "Account Overview",
            description: "Your account activity over the year."
        },
        layout: {
            helpTitle: "Need Help?",
            helpDescription: "Contact our support team if you have any questions.",
            contactSupport: "Contact Support",
            accountMenu: "My Account"
        }
    },
    loans: {
        pageTitle: "My Loans",
        apply: "Apply for New Loan",
        history: "Loan History",
        historyDescription: "A list of your loan applications and their status.",
        dateRequested: "Date Requested",
        term: "Term",
        status: {
            approved: "Approved",
            pending: "Pending",
            rejected: "Rejected",
            paidOff: "Paid Off"
        },
        application: {
            title: "New Loan Application",
            description: "Fill in the details below to apply for a new loan. Your request will be reviewed by our team.",
            amountLabel: "Amount (RWF)",
            repaymentLabel: "Repayment",
            repaymentPlaceholder: "Select repayment period",
            repayment3: "3 Months",
            repayment6: "6 Months",
            repayment12: "12 Months",
            repayment24: "24 Months",
            submit: "Submit Application"
        },
        contract: {
            title: "Loan Agreement Contract",
            description: "This is a preview of your loan agreement. Please review it carefully.",
            button: "Contract",
            download: "Download PDF",
            downloading: "Downloading..."
        }
    },
    withdraw: {
        pageTitle: "Withdraw Funds",
        form: {
            title: "New Withdrawal",
            description: "Request a withdrawal to your registered mobile money account (0788123456).",
            amountLabel: "Amount (RWF)",
            amountPlaceholder: "Enter amount",
            button: "Request Withdrawal"
        },
        history: {
            title: "Withdrawal History",
            description: "Your recent withdrawal requests.",
            method: "Method",
            status: {
                completed: "Completed",
                pending: "Pending",
                failed: "Failed"
            }
        }
    },
    support: {
        pageTitle: "Support Center",
        createTicket: "Create New Ticket",
        table: {
            title: "My Support Tickets",
            description: "A list of your support requests."
        },
        ticket: {
            title: "New Support Ticket",
            description: "Describe your issue below. Our support team will get back to you shortly.",
            subjectPlaceholder: "e.g., Issue with withdrawal",
            messagePlaceholder: "Please provide details about your issue...",
            submit: "Submit Ticket"
        },
        status: {
            open: "Open",
            closed: "Closed"
        }
    },
    admin: {
        dashboard: {
            pageTitle: "Admin Dashboard",
            cards: {
                totalUsers: "Total Users",
                usersDesc: "+12 since last week",
                totalLoans: "Total Loans Value",
                loansDesc: "Active loans value",
                totalSavings: "Total Savings",
                savingsDesc: "Across all members",
                pending: "Pending Approvals",
                pendingDesc: "Awaiting review"
            },
            pendingLoans: {
                title: "Pending Loan Applications",
                description: "Review and approve or reject new loan requests."
            },
            recentUsers: {
                title: "Recent Sign-ups",
                description: "New members who joined this week.",
                joinedOn: "Joined on {{date}}"
            },
            layout: {
                account: "Admin Account"
            }
        },
        users: {
            pageTitle: "Manage Users",
            cardTitle: "All Users",
            cardDescription: "View, edit, or manage user accounts.",
            phone: "Phone Number",
            id: "Rwandan ID",
            dateJoined: "Date Joined",
            details: {
                title: "User Details"
            },
            transactions: {
                title: "Transaction History",
                description: "Transaction history for {{name}}.",
                descriptionHeader: "Description",
                type: "Type",
                noTransactions: "No transactions found for this user."
            },
            actions: {
                title: "Actions",
                deposit: "Deposit",
                withdraw: "Withdraw",
                viewDetails: "View Details",
                depositDialogTitle: "Make a Deposit",
                withdrawDialogTitle: "Make a Withdrawal",
                dialogDescription: "Enter the amount to {{action}} for {{name}} ({{phone}}).",
                amountLabel: "Amount (RWF)",
                amountPlaceholder: "Enter amount",
                successTitle: "Action Successful",
                successDesc: "Successfully processed {{action}} of RWF {{amount}} for {{name}}.",
                invalidAmountTitle: "Invalid Amount",
                invalidAmountDesc: "Please enter a valid amount.",
                verificationTitle: "Verify Transaction",
                verificationDescription: "A 6-digit code has been sent to {{name}}'s phone. Please enter it below to confirm the {{action}} of RWF {{amount}}.",
                verificationCodeLabel: "Verification Code",
                verificationCodePlaceholder: "123456",
                continueButton: "Continue",
                codeSentTitle: "Code Sent",
                codeSentDesc: "A verification code has been sent to the user's phone.",
                invalidCodeTitle: "Invalid Code",
                invalidCodeDesc: "The verification code is incorrect. Please try again."
            }
        },
        loans: {
            pageTitle: "Manage Loans",
            cardTitle: "All Loan Applications",
            cardDescription: "View and manage all loan applications.",
        },
        settings: {
            pageTitle: "SACCO Settings",
            cardTitle: "Loan Configuration",
            cardDescription: "Set the global parameters for new loans.",
            interestRate: "Interest Rate (%)",
            maxLoan: "Max Loan Amount (RWF)",
            repaymentTerms: "Default Repayment Terms (Months)",
            repaymentPlaceholder: "e.g., 3, 6, 12, 24",
            save: "Save Settings"
        }
    }
}
