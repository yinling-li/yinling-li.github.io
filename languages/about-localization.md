# Notes on localization

## Function
Function in google sheet to generate the json (concatenate key + language)

```
=ArrayFormula(CONCATENATE("{"; join(", "; CHAR(34)&A3:A188&CHAR(34)&CHAR(58)&CHAR(32)&CHAR(34)&B3:B188&CHAR(34)); "}"))
=GOOGLETRANSLATE(B2:B ; "en"; "fr")
```

## Localization keys structure

| localization | key |
|---|---|
|index.html|home.|
|about.html|about.|
|dealer.html|dealer.|
|google-en.html|google-en.|
|dailyui.html|dailyui.|
|google-en.html|google-en.|
|women.html|women.|
|fitness.html|fitness.|
|kumiko.html|kumiko.|
|rise.html|rise.|
|radius.html|google-en.|
|assist.html|assist.|
|404.html|404.|

| localization | key |
|---|---|
|Button|btn.|
|Navigation|nav.|


## Naming convention of the data-i18n
```
data-i18n="home.arg_arg_arg"
```

## Links
- https://poeditor.com/
- https://www.deepl.com/en/translator