function createAccount(pin, amount = 0) {
    var userPin = pin;
    var currAmount = amount;
    return {
        checkBalance: function (pin) {
            if (pin !== userPin) return "Invalid PIN.";
            return `$${currAmount}`;
        },
        deposit: function (pin, amount) {
            if (pin !== userPin) return "Invalid PIN.";
            currAmount += amount;
            return `Succesfully deposited $${amount}. Current balance: $${currAmount}.`;
        },
        withdraw: function (pin, amount) {
            if (pin !== userPin) return "Invalid PIN.";
            if (amount > currAmount) return "Withdrawal amount exceeds account balance. Transaction cancelled."
            currAmount -= amount;
            return `Succesfully withdrew $${amount}. Current balance: $${currAmount}.`;
        },
        changePin: function (pin) {
            if (pin !== userPin) {
                return "Invalid PIN."
            } else {
                userPin = pin
                return "PIN successfully changed!"
            }
        }
    };
};

module.exports = { createAccount };
