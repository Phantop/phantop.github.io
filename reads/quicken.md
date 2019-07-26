
# Source: https://old.reddit.com/r/personalfinance/comments/c4mzfe/i_made_a_google_sheet_to_replace_quicken/

disclaimer: This sheet has no script, no hidden cells, no hidden formula.

Quicken user for 20+ yrs. 2 months ago, my 2016 Quicken was expiring and I decided to develop a spreadsheet to replace Quicken. My sheet has been working great for 2 months so I've decided to share with the public. Obviously, I had to remove my personal data. And I also removed several complex functions so that anyone can understand the core formulas and modify to suit their needs.

Here's the bare bone version:
https://docs.google.com/spreadsheets/d/1rt14NzYB3OcZ2jLqnJAp3YkhV7R25ipjjkQiyVVmBfs

This basic version has 5 tabs:

NET WORTH (or account balances)
months in rows, accounts in columns

INCOME EXPENSE
months in rows, categories in columns

PORTFOLIO (# of shares, prices)
months in rows, securities in columns

Data1 (for entering bank/CC/loan transactions)
columns: account, date, payee, category, amount

Data2 (for entering investment transactions)
columns: account, date, type, symbol, price, shares, $ amount

How it works:

Enter bank/CC/loan transaction data into "Data1" and investment transactions into "Data2". (This copy has a fictional example for demonstration. See #16 below to semi-automate data entry.)

Then the Google sheet auto-updates the 1st 3 report tabs

"INCOME EXPENSE": Pivot Table calculating how much you spent on each category, each month
"PORTFOLIO": Pivot Table calculates how many shares added/subtracted for each security, each month. Then =googlefinance() pulls historical end of month security prices. Multiplied by # of shares to calculate the value for each security, each month
"NET WORTH" =sumifs(amount, account, date) calculates end of month balances for every account

Additional functions/features you may add to this basic version (I'm not willing to share my full version with these features because of privacy. But I'm willing to explain how to add these features below. Just ask.):

"Dashboard" tab to display the current account balances, line/bar/pie charts for portfolio value/spending/asset allocation (similar to Quicken homepage)
Double clicking a cell in Pivot Chart creates a new tab displaying only the corresponding transactions
"Running balance" for account reconciliation
Use "filter" in pivot table to exclude unwanted categories such as "Transfer" in spending report
Accrual-basis accounting (vs cash-basis). For example, tax refund received on 4/15/2019 should be recognized as for year 2018 (not 2019).
Expensing a large item purchase (eg. car, property tax) over time (vs lumpsum expense)
Split transaction (eg. mortgage pmt = interest expense + principal pmt)
Recognize gross income (vs net income)
Dividend/capital gains income
Cost-basis, unrealized capital gains, dollar-weighted return
Asset allocation (eg. Stock vs Bond %)
Data validation (selecting field from a list)
=importrange() (useful if your data becomes too large)
=iferror() (to hide #N/A results)
Excel doesn't support =googlefinance() to pull historical prices. As of now, Excel can only pull current information instead. This will not help with calculating the portfolio value as of 3/31/2019. To use Excel, consider using the last recorded price or a 3rd party add-in.
Download transaction CSV files from websites and copy/paste data (vs hand entry). If you are willing to share passwords, consider mint, tillerhq to import data.
Learn how to convert QIF to CSV, if you are migrating from Quicken
Sort transactions in descending vs ascending date order
Conditional formatting based on account name in Data tabs
Use "Define named range". For example, use "dates" instead of "Data1!$B:$B" in commands. Easier to refer and debug.
Use Google Form to enter transaction data at point of purchase.
Let me know if you want to know more about these with examples.

update: There are no hidden commands. To be transparent, I removed blank rows/columns and conditional formatting. Also use Ctrl + ` keys to see all the commands. Just add more rows/columns, as needed.

update2: Some requested an XLS version. Today, I attempted XLS version from scratch but faced 2 setbacks:
1. Excel doesn't have a built-in command to pull "historical" stock prices, which is needed to calculate the portfolio values for a given date. Possible solutions: a) use Google Sheet to collect price data and copy paste manually. b) use 3rd party add-in or VB.
2. Excel doesn't automatically update Pivot Table. After entering new data, one must manually "refresh" the table. https://support.office.com/en-us/article/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2 To automate this, one can use macro, which comes with its own risk.
update3 (7/9/2019). Added a Net Worth chart at the request from https://old.reddit.com/r/financialindependence/comments/cb0gyt/graphing_net_worth_investments_contributions/
