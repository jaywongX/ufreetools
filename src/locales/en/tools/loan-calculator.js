export default {
  name: 'Loan Calculator',
  description: 'Calculate monthly payments, total interest and payment schedule for housing, car and personal loans',
  
  // Main interface text
  loanType: 'Loan Type',
  housingLoan: 'Housing Loan',
  carLoan: 'Car Loan',
  personalLoan: 'Personal Loan',
  
  loanAmount: 'Loan Amount',
  loanTerm: 'Loan Term',
  interestRate: 'Interest Rate',
  paymentMethod: 'Payment Method',
  equalPrincipalAndInterest: 'Equal Payment',
  equalPrincipal: 'Equal Principal',
  
  calculate: 'Calculate',
  reset: 'Reset',
  
  years: 'Years',
  months: 'Months',
  amount: 'Amount',
  currency: 'Currency',
  CNY: 'CNY (¥)',
  USD: 'USD ($)',
  EUR: 'EUR (€)',
  JPY: 'JPY (¥)',
  GBP: 'GBP (£)',
  
  // Results area
  results: 'Results',
  monthlyPayment: 'Monthly Payment',
  firstMonthPayment: 'First Month Payment',
  lastMonthPayment: 'Last Month Payment',
  totalInterest: 'Total Interest',
  totalPayment: 'Total Payment',
  interestRatio: 'Interest Ratio',
  
  // Payment schedule
  paymentSchedule: 'Payment Schedule',
  downloadExcel: 'Export Excel',
  paymentNo: 'No.',
  paymentDate: 'Payment Date',
  principal: 'Principal',
  interest: 'Interest',
  payment: 'Payment',
  remainingPrincipal: 'Remaining Principal',
  
  // Charts
  paymentChart: 'Payment Analysis',
  principalAndInterest: 'Principal vs Interest',
  monthlyPaymentTrend: 'Monthly Payment Trend',
  
  // Tool introduction
  aboutTitle: 'About Loan Calculator',
  aboutDescription: 'The Loan Calculator is a tool that helps you calculate the details of various loans, including housing loans, car loans, and personal loans, giving you a clear understanding of the cost of borrowing.',
  
  featuresTitle: 'Key Features',
  feature1: 'Support for equal payment and equal principal repayment methods',
  feature2: 'Calculate monthly payments, total interest, and total repayment',
  feature3: 'Generate detailed payment schedule',
  feature4: 'Visual charts showing principal and interest distribution',
  feature5: 'Support for multiple currencies',
  
  usageTitle: 'How to Use',
  usageStep1: 'Select loan type (housing, car, or personal loan)',
  usageStep2: 'Enter loan amount, term, and annual interest rate',
  usageStep3: 'Choose repayment method (equal payment or equal principal)',
  usageStep4: 'Click "Calculate" button to get detailed information',
  usageStep5: 'View payment schedule and chart analysis',
  
  explanationTitle: 'Payment Methods Explained',
  explanationEqualPayment: 'Equal Payment: Monthly payment remains the same, but the interest portion decreases over time while the principal portion increases.',
  explanationEqualPrincipal: 'Equal Principal: Equal principal is paid each month, while interest decreases as the remaining principal decreases, resulting in gradually decreasing monthly payments.',
  
  tipsTitle: 'Tips',
  tip1: 'Extending loan term reduces monthly payments but increases total interest paid',
  tip2: 'Equal principal method results in less total interest than equal payment, but higher initial monthly payments',
  tip3: 'Early repayment reduces interest expenses, especially in the early stages of the loan',
  tip4: 'Use this tool to compare different loan options and choose the one that best fits your financial situation',
  
  article: {
    title: "Complete Guide to Loan Calculation: Understanding Your Mortgage, Car Loan, and Personal Borrowing Options",
    intro: {
      title: "Understanding Modern Loan Calculation Tools",
      p1: "<b>Loan calculators</b> have become essential financial planning tools in today's complex borrowing landscape. Our comprehensive loan calculator simplifies the process of understanding the true cost of borrowing, whether you're planning to purchase a home, finance a vehicle, or take out a personal loan. By providing detailed payment schedules, interest breakdowns, and total cost analyses, this tool empowers borrowers to make informed financial decisions before committing to loan agreements that may impact their finances for years or even decades.",
      p2: "<b>Financial transparency</b> is critical when evaluating loan options, and our calculator delivers exactly that by showing you not just your monthly payments, but also the complete amortization schedule, total interest costs, and the ratio of interest to principal. This level of detail helps reveal how different loan terms, interest rates, and repayment methods affect your financial commitment over time. Whether you're comparing offers from different lenders, evaluating refinancing options, or simply planning your budget, having accurate loan calculations at your fingertips can save you thousands in interest payments and help avoid financial overextension.",
      p3: "<b>Mortgage payments, auto loan financing,</b> and personal borrowing all come with their own considerations and typical terms. Our multi-purpose calculator handles all three loan types, automatically adjusting for common parameters while allowing full customization based on your specific loan offers. By visualizing the long-term impact of your borrowing choices, you can strategically select terms that align with your financial goals, whether that's minimizing total interest paid, reducing monthly payment pressure, or balancing both considerations for optimal financial health."
    },
    useCases: {
      title: "Practical Applications of the Loan Calculator",
      case1: "<h3>Home Mortgage Planning and Comparison</h3><p><b>Mortgage loan planning</b> is perhaps the most critical application of our calculator, as homes represent the largest purchase most individuals will make in their lifetime. When evaluating mortgage options, prospective homeowners can use the calculator to compare how different down payment amounts alter their loan-to-value ratio and monthly obligations. The tool enables side-by-side analysis of 15-year versus 30-year mortgages, showing not just the difference in monthly payments but the dramatic variation in total interest paid over the life of the loan. For existing homeowners, the calculator proves invaluable when considering refinancing options, clearly demonstrating whether rate reductions justify refinancing costs, or when evaluating the impact of making additional principal payments to accelerate loan payoff and reduce total interest.</p>",
      case2: "<h3>Vehicle Financing Optimization</h3><p><b>Auto loan calculations</b> help consumers navigate the often confusing world of car financing, where dealerships and lenders may emphasize monthly payments while obscuring total costs. Our calculator brings transparency to this process, allowing shoppers to understand how extended loan terms (increasingly common in auto financing) dramatically increase overall interest payments despite offering lower monthly payments. Users can evaluate whether special dealer financing with lower interest rates but less room for price negotiation offers better value than outside financing with potentially more purchase price flexibility. The calculator also helps determine the optimal down payment amount for auto loans, balancing immediate cash outlay against long-term interest savings and equity position in a depreciating asset.</p>",
      case3: "<h3>Personal Loan Budgeting and Management</h3><p><b>Personal loan planning</b> requires careful consideration of how new debt obligations will fit into existing budgets. Our calculator helps users determine affordable loan amounts based on their desired monthly payment capacity, rather than simply accepting whatever amount lenders are willing to offer. For debt consolidation purposes, the tool enables precise comparisons between current multiple payment arrangements and potential consolidation loans, verifying whether the consolidated option truly offers savings. The calculator also assists with planning major expenses like home renovations, weddings, or education costs, helping users understand how different borrowing amounts and terms impact their monthly cash flow and overall financial health before committing to new financial obligations.</p>",
      case4: "<h3>Financial Education and Literacy Development</h3><p><b>Loan payment education</b> is a critical component of financial literacy, and our calculator serves as an effective teaching tool for understanding how compound interest and amortization impact borrowing costs. Financial educators and counselors use calculators like ours to demonstrate how early loan payoff strategies can significantly reduce total interest paid, or to illustrate the dramatic difference in total cost between similar loans with even small interest rate variations. For young adults learning about personal finance, the visual representation of payment schedules helps cement the understanding that loans are not just about monthly affordability but about total cost over time. The calculator transforms abstract financial concepts into concrete numbers based on real-world scenarios, making financial education more relevant and impactful.</p>",
      case5: "<h3>Business Investment Analysis and Financing</h3><p><b>Commercial loan assessment</b> for small businesses and entrepreneurs requires weighing financing costs against projected returns on investment. Our calculator helps business owners analyze whether taking on debt for equipment purchases, expansion, or inventory makes financial sense by comparing the total cost of borrowing against expected revenue generation or cost savings. For real estate investors, the tool enables quick analysis of property financing options to determine cash flow implications and overall profitability of potential investments. Business owners can also use the calculator to understand how different repayment strategies affect their company's cash flow, helping to maintain operational liquidity while effectively managing debt obligations. This analytical approach to business borrowing supports sound investment decisions and sustainable growth strategies.</p>"
    },
    loanMethods: {
      title: "Understanding Different Loan Repayment Methods",
      method1: {
        title: "Equal Payment (Amortization) Method",
        description: "<p>The <b>equal payment method</b>, also known as amortization or equal principal and interest, structures loan repayment so that every monthly payment remains the same throughout the loan term. This consistency makes budgeting straightforward for borrowers, as they can count on the same payment amount each month. However, what changes within these equal payments is the proportion of principal versus interest.</p><p>In the early years of the loan, the majority of each payment goes toward interest, with only a small portion reducing the principal balance. As the loan progresses, this ratio gradually shifts, with an increasing amount going toward principal reduction and less toward interest. This occurs because interest is calculated based on the remaining principal balance, which decreases over time.</p><p>This method is particularly common for mortgages and long-term loans, as it provides payment stability while ensuring the loan is fully repaid by the end of the term. The mathematical formula for calculating the monthly payment under this method is:</p><p class='text-center my-3'><code>Monthly Payment = Principal × [r(1+r)ⁿ] ÷ [(1+r)ⁿ-1]</code></p><p>Where r is the monthly interest rate (annual rate divided by 12) and n is the total number of payments (term in years multiplied by 12).</p>"
      },
      method2: {
        title: "Equal Principal Method",
        description: "<p>The <b>equal principal repayment method</b> takes a different approach by dividing the total principal amount equally across all payments. This means each payment includes the same amount of principal reduction, but the interest portion varies and decreases over time. Consequently, the total monthly payment gradually decreases throughout the loan term.</p><p>With this method, borrowers pay more in the early stages of the loan but benefit from declining payment amounts as the loan progresses. The higher initial payments result in faster principal reduction, which leads to less total interest paid over the life of the loan compared to the equal payment method.</p><p>This repayment structure is often used for commercial loans and some types of mortgages, particularly in certain international markets. It offers the advantage of reducing the total interest burden but requires borrowers to manage higher initial payments. The calculation for this method is more straightforward:</p><p class='text-center my-3'><code>Monthly Principal = Total Principal ÷ Number of Payments</code><br><code>Monthly Interest = Remaining Principal × Monthly Interest Rate</code><br><code>Total Monthly Payment = Monthly Principal + Monthly Interest</code></p><p>As the remaining principal decreases each month, so does the interest component, resulting in gradually decreasing monthly payments.</p>"
      }
    },
    tutorial: {
      title: "Step-by-Step Guide to Using Our Loan Calculator",
      intro: "Follow these instructions to get the most out of our loan calculator and understand your borrowing options clearly:",
      step1: {
        title: "Step 1: Select Your Loan Type and Currency",
        description: "Begin by selecting the appropriate loan type from the options provided: housing loan (mortgage), car loan, or personal loan. While the calculator functions the same for all types, this selection helps contextualize your results and may affect default values. Next, choose your preferred currency from the dropdown menu. The calculator supports major currencies including CNY, USD, EUR, JPY, and GBP, making it useful for international borrowers or those comparing loans across different markets. The currency selection affects only the display format of monetary values and doesn't impact the actual calculations."
      },
      step2: {
        title: "Step 2: Enter Your Loan Details",
        description: "Now, enter the specific details of your loan. Start with the loan amount, inputting the principal sum you plan to borrow without commas or currency symbols. Next, specify the loan term, either in years or months by selecting the appropriate unit from the dropdown menu. For mortgages, terms typically range from 15-30 years, while car loans often span 3-7 years, and personal loans usually range from 1-5 years. Finally, enter the annual interest rate as a percentage (e.g., 4.5 for 4.5%). Be sure to use the actual annual percentage rate (APR) offered by your lender to ensure accurate calculations."
      },
      step3: {
        title: "Step 3: Choose Your Repayment Method",
        description: "Select your preferred repayment method: equal payment (equal principal and interest) or equal principal. The equal payment method provides consistent monthly payments throughout the loan term, making budgeting simpler but resulting in more total interest paid. The equal principal method divides the principal evenly across all payments, resulting in higher initial payments that gradually decrease over time. This method reduces the total interest paid but requires more financial flexibility in the early years of the loan. Your selection here will significantly impact both your monthly payment structure and the total interest paid over the life of the loan."
      },
      step4: {
        title: "Step 4: Analyze Your Results and Payment Schedule",
        description: "After clicking the \"Calculate\" button, review the comprehensive results displayed. For equal payment loans, you'll see the fixed monthly payment amount. For equal principal loans, both the first (highest) and last (lowest) monthly payments are shown. All calculations include the total interest paid over the life of the loan, the total payment (principal plus interest), and the interest ratio (percentage of total payment that goes to interest). Scroll down to examine the detailed payment schedule, which breaks down each payment into principal and interest components and shows the remaining balance after each payment. This schedule can be exported to Excel for further analysis or record-keeping. Use the visual charts to better understand the distribution between principal and interest payments over time."
      }
    },
    faq: {
      title: "Frequently Asked Questions About Loan Calculations",
      q1: "How does changing the loan term affect my total interest paid?",
      a1: "<b>Loan term adjustments significantly impact your total interest costs</b>. Extending your loan term (e.g., choosing a 30-year mortgage instead of a 15-year one) reduces your monthly payment amount but substantially increases the total interest paid over the life of the loan. This occurs because you're borrowing the money for a longer period, resulting in more interest accrual. For example, on a $300,000 mortgage at 4% interest, a 30-year term might require monthly payments around $1,432 with total interest of approximately $215,609, while a 15-year term would have higher monthly payments of about $2,219 but total interest of only $99,431—a savings of over $116,000. This principle applies to all loan types, making shorter terms financially advantageous if you can afford the higher monthly payments. Our loan calculator visualizes this relationship clearly, allowing you to find the optimal balance between affordable monthly payments and reasonable total interest costs.",
      
      q2: "Which repayment method will save me more money: equal payment or equal principal?",
      a2: "<b>Equal principal repayment typically results in lower total interest costs</b> compared to the equal payment (amortization) method. This occurs because the equal principal method pays down the loan balance more aggressively in the early years of the loan, when the balance is highest. Since interest is calculated based on the remaining principal, faster principal reduction means less interest accrues over time. For a $200,000 loan at 4.5% interest over 20 years, the equal principal method might save around $9,000-$15,000 in total interest compared to equal payment. However, this interest savings comes with a trade-off: equal principal payments start higher and gradually decrease, while equal payments remain constant throughout the loan term. For example, if the equal payment amount would be $1,266 monthly, the equal principal method might start at $1,542 in the first month, gradually decreasing to $990 by the final year. Your optimal choice depends on your financial situation—equal payment offers predictable budgeting, while equal principal provides interest savings for those who can handle higher initial payments.",
      
      q3: "How much can I save by making extra principal payments on my loan?",
      a3: "<b>Making additional principal payments can dramatically reduce your total loan cost</b> and shorten your loan term. The impact is most significant when these extra payments are made early in the loan term, when a larger portion of each payment typically goes toward interest rather than principal reduction. For example, on a 30-year, $300,000 mortgage at 4% interest, paying an extra $200 per month from the beginning could save approximately $62,000 in interest and shorten the loan by nearly 8 years. Even modest one-time extra payments can make a difference—a single additional $1,000 payment in year 2 of the same mortgage would save about $2,700 in total interest and shorten the loan by 3 months. The savings are proportionally greater for higher-interest loans like personal loans or credit cards. Our loan calculator can help you understand these benefits by recalculating your loan schedule with projected extra payments, whether you're planning regular additional payments or occasional lump sums. Remember that some loans may have prepayment penalties, so check your loan terms before implementing this strategy.",
      
      q4: "How should I interpret the amortization schedule provided by the calculator?",
      a4: "<b>The loan amortization schedule provides a detailed breakdown of each payment</b> over the entire life of your loan, offering valuable insights into how your debt is retired over time. Each row in the schedule represents one payment period (typically monthly) and includes several key pieces of information: the payment number, date, amount of principal being paid, amount of interest being paid, total payment amount, and remaining principal balance after that payment. By examining this schedule, you can observe how the proportion of principal versus interest changes over time—generally, more of your payment goes toward interest at the beginning of the loan, with this ratio gradually shifting toward more principal reduction as the loan matures. The schedule also allows you to identify specific points in your loan term, such as when you'll reach certain equity thresholds or when you'll cross the halfway point in paying off your loan. For planning purposes, you can use the schedule to determine the impact of additional payments or to see your projected loan balance at any future date, which is particularly useful when considering refinancing options or planning for major financial changes.",
      
      q5: "What factors should I consider when comparing different loan offers?",
      a5: "<b>Effective loan comparison requires analyzing multiple factors beyond just the interest rate</b>. While the annual percentage rate (APR) is important as it directly affects your cost of borrowing, you should also carefully evaluate the loan term (length), as longer terms reduce monthly payments but significantly increase total interest paid. Pay attention to the type of interest rate offered—fixed rates provide payment stability, while variable rates may start lower but carry future uncertainty. Consider whether there are origination fees, application fees, or points that effectively increase your borrowing costs, and factor these into your comparison using the calculator's total payment results. For mortgages specifically, evaluate requirements for private mortgage insurance (PMI) and how long you'll need to pay it. Also important are prepayment penalties that might restrict your ability to make extra payments or refinance, and any balloon payment requirements that could create future financial challenges. Our loan calculator helps you standardize these variables for fair comparison—enter the different loan scenarios with all associated costs to see which option offers the best combination of monthly affordability and total cost over time. Remember that the \"cheapest\" loan isn't always the one with the lowest monthly payment, but rather the one that minimizes your total cost while meeting your cash flow needs."
    },
    relatedTools: {
      title: "Explore Related Financial Tools",
      description: "Enhance your financial planning with these complementary calculators and resources:",
      tool1: {
        name: "Compound Interest Calculator",
        url: "https://www.ufreetools.com/tool/compound-interest-calculator",
        description: "Calculate how your investments grow over time with the power of compound interest."
      },
      tool2: {
        name: "Currency Converter",
        url: "https://www.ufreetools.com/tool/currency-converter",
        description: "Convert between different currencies using up-to-date exchange rates."
      },
      tool3: {
        name: "Percentage Calculator",
        url: "https://www.ufreetools.com/tool/percentage-calculator",
        description: "Calculate percentages, increases, decreases, and differences between values."
      },
      tool4: {
        name: "Retirement Calculator",
        url: "https://www.ufreetools.com/tool/retirement-calculator",
        description: "Plan for your future by estimating your retirement savings and needs."
      }
    },
    resources: {
      title: "Authoritative Resources on Loan Planning",
      resource1: {
        name: "Consumer Financial Protection Bureau (CFPB)",
        url: "https://www.consumerfinance.gov/owning-a-home/",
        description: "Official government resources for understanding mortgage options and borrower rights."
      },
      resource2: {
        name: "Federal Trade Commission - Consumer Information",
        url: "https://consumer.ftc.gov/money-and-credit",
        description: "Reliable guidance on loans, credit, and protecting yourself from predatory lending."
      },
      resource3: {
        name: "Financial Industry Regulatory Authority (FINRA)",
        url: "https://www.finra.org/investors/insights/mortgage-calculator",
        description: "Educational resources about mortgage calculations and financial planning from a regulatory organization."
      }
    }
  }
}; 