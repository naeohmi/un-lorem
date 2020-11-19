# UN-Lorem Filler Text Refresh

Arising from the rubble and ash of World War Two, the United Nations was established in 1945. Seeking to prevent such atrocities the world witnessed during the war, the United Nations worked to affirm basic human rights as described its foundational documents. In the few years that followed, a document took shape that captured the vision of a faith in fundamental human rights, the dignity of the human person, and a commitment to promote better standards of living to all persons across the world. The Universal Declaration of Human Rights was adopted by the UN General Assembly in Paris on 10 December 1948. Drafted by representatives with different legal and cultural backgrounds from all regions of the world, its adoption was a milestone in the history of human rights.

### The Declaration has formed the basis of international human rights law and bodies for human rights protections. 

It supports the decolonization struggle and its principles have been enshrined in constitutions of newly established countries.

> The document has been translated in over five hundred languages and has enjoyed special status as the most translated document that has ever existed.

Our aim with the UN-Lorem filler text project is to provide an alternative to the lorem Ipsum content which many in the type and content industries have used as default placeholder or sample content. We propose and to make available the Declaration as a substitute filler content. This is especially relevant at this time in history as struggles increase and escalate for many of the fundamental rights provided for within the Declaration. We believe it is essential to put these values of the Declaration in front of as many people as possible as a reminder that All human beings are born free and equal in dignity and rights.


---

## API documentation

```
GET https://naeohmi.github.io/un-lorem/api/LOCALE/article_NUMBER.json

-> LOCALE = language code, example - en_us, pl_pl, es_es, zh_cn
-> NUMBER = any article number 1-30

```

Example API calls 


```
short length text in Chinese => 
https://naeohmi.github.io/un-lorem/api/zh_cn/article_17.json

medium length text in Polish =>
https://naeohmi.github.io/un-lorem/api/pl_pl/article_12.json

long length text in Russian =>
https://naeohmi.github.io/un-lorem/api/ru_ru/article_1.json

```

---


## The UN-Lorem Filler Text Refresh project came out of a hackathon experience in November 2020. 

### This was our pitch:

> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

Wait, what? Did someone’s cat walk across a keyboard? No, this is the placeholder text lorem ipsum. Tried and true. Tired and due. Due for retirement.

OK, maybe not complete retirement, but maybe part time work. It’s got a great legacy.

Our hackathon idea is to provide an alternative to this classic text. Our proposal is to provide a readable selection of text that anyone can use, via API, for their placeholding needs. In the spirit of All in Action, we believe that the United Nations Declaration of Human Rights is the right placeholder text to provide. Why? This text has been localized in well over a hundred languages, is long enough to provide any word or character count one might need, it’s readable and it conveys important ideas for humanity.

The API is the technical magic. We will store the text in our git repo and provide ways to call for any amount of text, any style, size and language, and lots of other things which we don’t have time to explain!

---

The MVP that @Naomi and @Rob came up with for the hackathon is to:
1 - create this repo
2 - write up a meaningful Readme.md
3 - populate the repo with the UN Declaration text with the _eighteen standard languages_ [0]
4 - produce the small handful of calls the API will return (eg, length of text, language, etc)

[0] French, German, Japanese, Spanish, Italian, Portuguese (Brazil), Dutch, Norwegian, Swedish, Danish, Finnish, Chinese (Simplified), Chinese (Traditional), Korean, Czech, Polish, Russian, Turkish
