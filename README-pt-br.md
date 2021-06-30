# Pérola Negra 🏴‍☠️ [![Doações](https://img.shields.io/badge/Doações-brightgreen.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=BKXUAMJSNZN46&item_name=Thanks+for+Help+me%21&currency_code=BRL&source=url)

<!-- Translate -->

[![Translate](https://img.shields.io/badge/Translate-pt--br-blue.svg)](./README-pt-br.md)

<!-- Banner -->

[![Banner](./.github/assets/black-pearl.svg)](https://github.com/deppbrazil/black-pearl)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a5099e9dcb8e4dff806f75da82123efd)](https://www.codacy.com/gh/deppbrazil/black-pearl/dashboard?utm_source=github.com&utm_medium=referral&utm_content=deppbrazil/black-pearl&utm_campaign=Badge_Grade) [![Last commit](https://img.shields.io/github/last-commit/deppbrazil/black-pearl.svg)](https://github.com/deppbrazil/black-pearl/commits/master) [![Repo size](https://img.shields.io/github/repo-size/deppbrazil/black-pearl.svg?color=brightgreen)](https://github.com/deppbrazil/black-pearl) [![Contributors](https://img.shields.io/github/contributors/deppbrazil/black-pearl.svg?color=blue)](https://github.com/deppbrazil/black-pearl/graphs/contributors) [![Language](https://img.shields.io/github/languages/top/deppbrazil/black-pearl.svg)](https://github.com/deppbrazil/black-pearl) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

## Iniciar

### Setup, você precisa de:

-   Nodejs `vs +12.0`
-   Yarn `vs 1.22.*`
-   Lerna `vs +3.0`

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
or,
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
