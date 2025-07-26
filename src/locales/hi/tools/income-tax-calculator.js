export default {
  name: 'आयकर कैलकुलेटर',
  description: 'अपनी कमाई से व्यक्तिगत आयकर और टेक-होम वेतन की गणना करें',

  // मुख्य इंटरफ़ेस टेक्स्ट
  taxSystem: 'कर प्रणाली',

  china: 'चीन',
  usa: 'यूएसए',
  uk: 'यूके',
  monthlyIncome: 'मासिक आय',
  annualIncome: 'वार्षिक आय',
  socialSecurity: 'सामाजिक सुरक्षा और निधि',
  socialSecurityAmount: 'सामाजिक सुरक्षा राशि',
  socialSecurityPercent: 'सामाजिक सुरक्षा प्रतिशत',
  socialSecurityBase: 'सामाजिक सुरक्षा आधार',
  deductions: 'विशेष कटौतियाँ',
  childrenEducation: 'बच्चों की शिक्षा',
  continuingEducation: 'सतत शिक्षा',
  housingLoanInterest: 'आवास ऋण ब्याज',
  housingRent: 'आवास किराया',
  elderlySupport: 'बुजुर्ग सहायता',
  medicalTreatment: 'चिकित्सा उपचार',
  otherDeductions: 'अन्य कटौतियाँ',
  calculate: 'गणना करें',
  reset: 'रीसेट करें',

  // परिणाम क्षेत्र
  results: 'परिणाम',

  taxableIncome: 'कर योग्य आय',
  taxRate: 'कर दर',
  quickDeduction: 'त्वरित कटौती',
  taxPayable: 'देय कर',
  afterTaxIncome: 'कर पश्चात आय',
  effectiveTaxRate: 'प्रभावी कर दर',
  monthlyBreakdown: 'मासिक विवरण',

  // चार्ट क्षेत्र
  taxAnalysis: 'कर विश्लेषण',

  incomeDistribution: 'आय वितरण',
  income: 'आय',
  tax: 'कर',
  takeHome: 'टेक होम',

  // कर ब्रैकेट क्षेत्र
  taxBrackets: 'कर ब्रैकेट',

  bracketRange: 'ब्रैकेट रेंज',
  rate: 'दर',

  // मासिक विवरण
  month: 'महीना',

  cumulativeIncome: 'संचयी आय',
  cumulativeDeduction: 'संचयी कटौती',
  cumulativeTaxable: 'संचयी कर योग्य',
  cumulativeTax: 'संचयी कर',
  previousTax: 'पिछला भुगतान किया गया कर',
  currentMonthTax: 'वर्तमान माह का कर',

  // शहर चयन
  city: 'शहर',

  firstTier: 'प्रथम श्रेणी का शहर',
  secondTier: 'द्वितीय श्रेणी का शहर',
  otherCity: 'अन्य शहर',

  // उपकरण परिचय
  aboutTitle: 'आयकर के बारे में',

  aboutDescription: 'अधिकांश देशों में एक व्यक्ति की आय पर व्यक्तिगत आयकर लगाया जाता है। चीन में, 3% से 45% तक की दरों के साथ एक प्रगतिशील कर प्रणाली का उपयोग किया जाता है, जिसमें उच्च आय पर उच्च कर दरें लगती हैं।',
  howToUseTitle: 'इस कैलकुलेटर का उपयोग कैसे करें',
  howToUseStep1: '1. कर प्रणाली का चयन करें (वर्तमान में चीनी कर प्रणाली का समर्थन करता है)',
  howToUseStep2: '2. अपनी मासिक या वार्षिक आय दर्ज करें (वे स्वचालित रूप से परिवर्तित हो जाते हैं)',
  howToUseStep3: '3. सामाजिक सुरक्षा राशि दर्ज करें या प्रतिशत गणना चुनें',
  howToUseStep4: '4. आप पर लागू होने वाली विशेष कटौतियाँ भरें',
  howToUseStep5: '5. परिणाम देखने के लिए "गणना करें" पर क्लिक करें',
  chinaTaxRulesTitle: 'चीनी कर गणना नियम',
  chinaTaxRule1: 'कर सीमा: 5,000 CNY/माह',
  chinaTaxRule2: 'कर योग्य आय = आय - सामाजिक सुरक्षा - विशेष कटौतियाँ - सीमा',
  chinaTaxRule3: 'कर = कर योग्य आय × कर दर - त्वरित कटौती',
  deductionExplainTitle: 'विशेष कटौतियाँ समझाई गईं',
  childrenEducationExplain: 'बच्चों की शिक्षा: 1,000 CNY/माह प्रति बच्चा',
  continuingEducationExplain: 'सतत शिक्षा: शैक्षणिक शिक्षा के लिए 400 CNY/माह; व्यावसायिक योग्यता के लिए 3,600 CNY/वर्ष',
  housingLoanExplain: 'आवास ऋण ब्याज: 1,000 CNY/माह',
  housingRentExplain: 'आवास किराया: प्रथम श्रेणी के शहरों में 1,500 CNY/माह; द्वितीय श्रेणी के शहरों में 1,100 CNY/माह; अन्य शहरों में 800 CNY/माह',
  elderlyExplain: 'बुजुर्ग सहायता: इकलौते बच्चे के लिए 2,000 CNY/माह; अन्यथा भाई-बहनों में विभाजित',
  medicalExplain: 'चिकित्सा उपचार: 15,000 CNY से अधिक वार्षिक चिकित्सा व्यय, 60,000 CNY/वर्ष तक',
  taxTipsTitle: 'कर युक्तियाँ',
  taxTip1: 'अपने कर के बोझ को कम करने के लिए विशेष कटौतियों का पूरा उपयोग करें',
  taxTip2: 'वार्षिक बोनस पर अलग से कर लगाया जा सकता है या वार्षिक आय के साथ जोड़ा जा सकता है',
  taxTip3: 'कर गणना के लिए कई आय स्रोतों को जोड़ा जाना चाहिए',
  taxTip4: 'उद्यम वार्षिकी और वाणिज्यिक स्वास्थ्य बीमा सीमाओं के भीतर कर-कटौती योग्य हो सकते हैं',
  taxTip5: 'कर जोखिमों से बचने के लिए विशेष कटौतियों की सही-सही रिपोर्ट करें'
};