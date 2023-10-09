---
index: 5
title: "Can I remove my personal data from GenAI training datasets?"
slug: "can-i-remove-my-personal-data-from-genai-training-datasets"
draft: false
contentType: "Q&A"
shortAnswer: |


confidenceLevel: |
    4
relatedCases: [J.L. v. Alphabet. Young v. NeoCortext, Inc.
]
---
Many tech companies creating GenAI products today do not disclose their sources of training data. But new tools are popping up that allow us to investigate whether our personal data has made its way into these training datasets. Examples include the “[Have I Been Trained](https://arstechnica.com/information-technology/2022/09/have-ai-image-generators-assimilated-your-art-new-tool-lets-you-check/)” tool, as well as the earlier Exposing.ai project. Through these tools, we have learned that many GenAI products are trained on massive datasets containing personal information scraped from popular websites, including social media platforms, video and photography sites, and online encyclopedias. According to one study extracting personal data from training datasets for early large language models like ChatGPT-2, GenAI products often produce outputs that contain peoples’ names and some form of contact information (like a phone number or social media handle). 

Journalists have been reporting more recently on the ways that newer LLMs regurgitate personal information that is likely contained in their training datasets. OpenAI explains clearly how “[a] large amount of data on the internet relates to people, so our training information does incidentally include personal information.” One artist even found that her private medical records containing photos of her facial condition were in LAION, a foundational dataset for many GenAI products.

This is not unique to GenAI, however. Many companies are following the playbook of earlier AI companies like Clearview AI, a controversial facial recognition company that built its powerful surveillance tool from scraping billions of photos containing peoples’ faces from the web. When Clearview did it, several platforms whose users’ photos were scraped and converted into training data sent cease-and-desist letters demanding Clearview stop taking their users’ data in violation of their User Agreements. Now, companies like X (formerly Twitter) are taking the same action against GenAI companies for taking their users’ data to train GenAI products. 

How can you remove personal data from training datasets when you do not know if your data is even there? 

One way may be to ask nicely. For example, Mozilla has set up a petition asking Microsoft to divulge if the company will use personal data to train its AI models per its new Service Agreement (effective September 30, 2023). 

Another way is to sue. In J.L. v. Alphabet, the plaintiffs are Github users who have long uploaded their computer code to the platform, only to allegedly have that code ingested as training data for Copilot. These plaintiffs allege that Github and OpenAI violated the CCPA by “incorporating” their personal information into Copilot with no way to alter or delete it, and with no way to share that data with them upon request. Compl. ¶ 227. Although the term “incorporating” is vague, this could be read to encompass data collected from Github that was used to train Copilot, specifically open source codes but not the personal information related to the codes (even if that information was incidentally part of the training dataset exfiltrated from Github to Copilot). But this is a strange claim under CCPA, which governs personal information (defined in § 1798.140(o)(1) of the CCPA)--a court will likely find it a stretch to argue that these users’ open source computer codes count as the kind of personal information protected under the CCPA. 

But likely the most promising method to learn whether your personal data is in GenAI training datasets and to seek its deletion is to send a request under the CCPA, which is only available for California residents. As part of an investigation into this right, Knowing Machines is currently testing out how various companies offering GenAI products respond to personal data requests under CCPA. So far, it is clear that companies respond in idiosyncratic ways and often ask for further information regarding the request and the requestor. This investigation could reveal the practical futility of data requests–including deletion requests–under CCPA as it currently stands, suggesting that the California Privacy Protection Agency can effectively develop guidelines for compliances as well as enforcement mechanisms for companies that fail to comply. 

For now, there is no foolproof way to force companies to disclose whether, how much, and what kinds of your personal data have been used as training data for their GenAI products. Even if there was a way, however, it is currently technically impossible to fully remove data from training datasets without influencing deep learning models in unpredictable ways. This issue is of regulatory concern for big players like Google, which announced a “Machine Unlearning Challenge” between mid-July and mid-September 2023. According to Google, the challenge involved “a realistic scenario in which an age predictor has been trained on face images, and, after training, a certain subset of the training images must be forgotten to protect the privacy or rights of the individuals concerned.” In a few months, we may see some technical progress on this issue; until then, companies may be unable to comply with data deletion provisions in laws like the CCPA. 