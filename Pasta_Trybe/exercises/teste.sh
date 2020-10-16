#!/bin/bash
:'
DIRETORIO=$1
if [ -d "$DIRETORIO" ]
  then
   FILE=`ls -l $DIRETORIO | wc -l`
      echo "$DIRETORIO tem $FILE arquivo"

else
     echo “o argumento $DIRETORIO não é um diretorio”
fi


PALAVRAS="shell script usando estrutura repetição for terminal"
for PALAVRA in $PALAVRAS 
do 
    echo $PALAVRA 

done   

'
ARGUMENTOS=$@
for ARGUMENTOS in $ARGUMENTO
do
if [ -f “$ARGUMENTO” ]
  then
    echo “$ARGUMENTO é um arquivo comum”
elif [ -d “$ARGUMENTO” ]
  then
    echo “$ARGUMENTO é um diretório”
else
    echo “$ARGUMENTO é outro tipo de arquivo”
fi

done