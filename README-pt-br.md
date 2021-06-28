# Pérola Negra 🏴‍☠️ [![Doações](https://img.shields.io/badge/Doações-brightgreen.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BKXUAMJSNZN46&item_name=Thanks+for+Help+me%21&currency_code=BRL&source=url)

<!-- Traduzir -->

<a href="./README.md">
  <img alt="Traduzir" src="https://img.shields.io/badge/Versão_Original-en-blue.svg">
</a>

<!-- Banner -->

<p align="center">
  <a href="" target="_blank" >
    <img alt="Banner" src="./.github/assets/black-pearl.svg" width="50%" />
  </a>
</p>

<!-- Primeiros badges -->

<p align="center">
  <!-- Codacy -->
  <a href="https://www.codacy.com/gh/deppbrazil/black-pearl/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=deppbrazil/black-pearl&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/a5099e9dcb8e4dff806f75da82123efd"/></a>
  <!-- Último commit -->
  <a href="https://github.com/deppbrazil/black-pearl/commits/master">
    <img alt="Último commit" src="https://img.shields.io/github/last-commit/deppbrazil/black-pearl.svg">
  </a>
  <!-- Tamanho do repo -->
  <a href="https://github.com/deppbrazil/black-pearl">
    <img alt="Tamanho do repo" src="https://img.shields.io/github/repo-size/deppbrazil/black-pearl.svg?color=brightgreen" />
  </a>
</p>

<!-- Segundos badges -->

<p align="center">
  <!-- Contibuidores -->
  <a href="https://github.com/deppbrazil/black-pearl/graphs/contributors">
    <img alt="Contibuidores do projeto" src="https://img.shields.io/github/contributors/deppbrazil/black-pearl.svg?color=blue" />
  </a>
  <!-- Linguagens -->
  <a href="https://github.com/deppbrazil/black-pearl">
    <img alt="Linguagens" src="https://img.shields.io/github/languages/top/deppbrazil/black-pearl.svg" />
  </a>
  <!-- Licença -->
  <a href="./LICENSE">
    <img alt="Licença do Software" src="https://img.shields.io/badge/license-MIT-blue.svg">
  </a>
</p>

## Iniciar

### Rodar no diretório principal

```console
foo@bar:~$ yarn
foo@bar:~$ yarn lerna bootstrap
```

### Rodar no diretório /cli

```console
foo@bar:~$ yarn
foo@bar:~$ yarn link
foo@bar:~$ blackpearl -h
```

### Rodar no diretório principal para ver a documentação com DOCZ

```console
foo@bar:~$ yarn start:docs
```

### Rodar para deploy da documentação no AWS S3

```console
foo@bar:~$ blackpearl deploy docs
```

## Criar Componente

### Rodar para criar um novo componente

```console
foo@bar:~$ blackpearl generate component NameComponent
```

### Rodan sempre logo após ter criado um componente novo

```console
foo@bar:~$ yarn
```

or,

```console
foo@bar:~$ yarn lerna bootstrap
```

### Gerar o build

```console
foo@bar:~$ yarn build
```

### Rodar os testes unitários de componente

```console
foo@bar:~$ yarn test
```

* * *

Copyright © Mir Carvalho 2021
