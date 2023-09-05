export default {
  DE: (type, id) => {
    const newsletter = `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Gratis Lieferung & Rückversand</span>
        <span class="title-advantages-item">✔️ Beste Auswahl</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Der Newsletter wird nicht richtig angezeigt? <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">Sieh</a> dir die Online-Version an.
        Füge Beliani zu deiner <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.de/content/whitelist-emails-de/">weißen Liste</a> hinzu.
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.de/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                        <img src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0" alt="Beliani" style="display:block" />
                    </a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.de/wohnzimmer-moebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_02.jpg" width="100%" border="0"
                            alt="M&ouml;bel" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.de/wohnzubehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.de/gartenmoebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_04.jpg" width="100%" border="0"
                            alt="Garten" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  CHDE: (type, id) => {
    const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
        <p class="title-advantages">
            <span class="title-advantages-item">✔️ Gratis Lieferung & Rückversand</span>
            <span class="title-advantages-item">✔️ Beste Auswahl</span>
        </p>

        <p class="newsletterRecommendationHeader">
            Der Newsletter wird nicht richtig angezeigt? <a href="[[newsshowurl]]" class="newsletterRecommendationHeaderLink" style="color: #000000;">Sieh</a> dir die Online-Version an.
            Füge Beliani zu deiner <a href="https://www.beliani.ch/content/whitelist-emails-de/" class="newsletterRecommendationHeaderLink" style="color: #000000;">weissen Liste</a> hinzu.
        </p>
        <!-- top -->

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.ch/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Beliani" border="0" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.ch/wohnzimmer-moebel/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Möbel" border="0" src="https://beliani.info/newsletter/2022/header_dach_02.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.ch/wohnzubehor/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Accessoires" border="0" src="https://beliani.info/newsletter/2022/header_dach_03.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.ch/gartenmoebel/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Garten" border="0" src="https://beliani.info/newsletter/2022/header_dach_04.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  AT: (type, id) => {
    const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
        <p class="title-advantages">
            <span class="title-advantages-item">✔️ Gratis Lieferung & Rückversand</span>
            <span class="title-advantages-item">✔️ Beste Auswahl</span>
        </p>
        <p class="newsletterRecommendationHeader">
            Der Newsletter wird nicht richtig angezeigt? <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">Sieh</a> dir die Online-Version an.
            Füge Beliani zu deiner <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.at/content/whitelist-emails-de/">weißen Liste</a> hinzu.
        </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.at/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.at/wohnzimmer-moebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_02.jpg" width="100%" border="0"
                            alt="Möbel" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.at/wohnzubehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.at/gartenmoebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_04.jpg" width="100%" border="0"
                            alt="Garten" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  FR: (type, id) => {
    const newsletter = `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Livraison & retour gratuits</span>
        <span class="title-advantages-item">✔️ La meilleure sélection</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Ce message n’apparaît pas, consultez la <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">version en ligne.</a>
        Ajoutez Beliani <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.fr/content/whitelist-emails-fr/">à votre liste</a> d'emails.
    </p>
    <!-- top -->   
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.fr/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.fr/meubles-de-salon/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_02.jpg" width="100%" border="0"
                            alt="Meubles" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.fr/accessoires/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.fr/meubles-de-jardin/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_04.jpg" width="100%" border="0"
                            alt="Jardin" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  CHFR: (type, id) => {
    const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Livraison & retour gratuits</span>
        <span class="title-advantages-item">✔️ La meilleure sélection</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Ce message n’apparaît pas, consultez la <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">version en ligne.</a>
        Ajoutez Beliani <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.ch/content/whitelist-emails-fr/">à votre liste</a> d'emails.
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.ch/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.ch/meubles-de-salon/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_02.jpg" width="100%" border="0"
                            alt="Meubles" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.ch/accessoires/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.ch/meubles-de-jardin/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_04.jpg" width="100%" border="0"
                            alt="Jardin" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  IT: (type, id) => {
    const newsletter = `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Spedizione e reso gratuiti</span>
        <span class="title-advantages-item">✔️ Miglior selezione</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Non riesci a visualizzare la newsletter? Prova <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="[[newsshowurl]]">la versione online.</a>
        Aggiungi Beliani alla <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="https://www.beliani.it/content/whitelist-emails-it/">tua lista di e-mail</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.it/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.it/soggiorno/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_it_02.jpg" width="100%" border="0"
                            alt="Arredi" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.it/accessori-casa/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_it_03.jpg" width="100%" border="0"
                            alt="Accessori" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.it/giardino/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_it_04.jpg" width="100%" border="0"
                            alt="Giardino" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  UK: (type, id) => {
    const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Free Delivery & Return</span>
        <span class="title-advantages-item">✔️ Best Selection</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Having trouble viewing Newsletter? View the <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">online version.</a>
        Add Beliani to your <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.co.uk/content/whitelist-emails/">whitelist</a>
    </p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.co.uk/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.co.uk/living-room-furniture/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_uk_02.jpg" width="100%" border="0"
                            alt="Furniture" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.co.uk/home-accessories/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_uk_03.jpg" width="100%" border="0"
                            alt="Accessories" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.co.uk/garden-furniture/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_uk_04.jpg" width="100%" border="0"
                            alt="Garden" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  ES: (type, id) => {
    const newsletter = `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Entrega & devolución gratis</span>
        <span class="title-advantages-item">✔️ Amplia selección</span>
    </p>
    <p class="newsletterRecommendationHeader">
        ¿No puedes ver la Newsletter? Consulta la versión <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">en línea.</a>
        Añade Beliani a tu <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.es/content/whitelist-emails-es/">lista blanca</a> de emails
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.es/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.es/salon/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_es_02.jpg" width="100%" border="0"
                            alt="Muebles" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.es/accesorios-del-hogar/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_es_03.jpg" width="100%" border="0"
                            alt="Accesorios" style="display:block" /></a></th>
                <th><a href="https://www.beliani.es/jardin/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_es_04.jpg" width="100%" border="0"
                            alt="Jardín" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  PT: (type, id) => {
    const newsletter = `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Entrega & devolução grátis</span>
        <span class="title-advantages-item">✔️ A melhor seleção</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Está com problemas para visualizar a Newsletter? Veja a versão <a href="[[newsshowurl]]" class="newsletterRecommendationHeaderLink" style="color: #000000;">online.</a>
        Adicione Beliani à sua <a href="https://www.beliani.pt/content/whitelist-emails-pt/" class="newsletterRecommendationHeaderLink" style="color: #000000;">lista branca</a> de emails.
    </p>
    <!-- top -->

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.pt/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Beliani" border="0" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.pt/sala/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Mobiliário" border="0" src="https://beliani.info/newsletter/2022/header_pt_02.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.pt/acessorios/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Acessórios" border="0" src="https://beliani.info/newsletter/2022/header_pt_03.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.pt/exterior/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img
                            alt="Jardim" border="0" src="https://beliani.info/newsletter/2022/header_pt_04.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  PL: (type, id) => {
    const newsletter = `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Darmowa dostawa i zwroty</span>
        <span class="title-advantages-item">✔️ Najlepszy wybór</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Przejdź do naszej <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">wersji online.</a>
        Dodaj Beliani do <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.pl/content/whitelist-emails-pl/">zaufanych maili.</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.pl/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.pl/meble-do-salonu/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_pl_02.jpg" width="100%" border="0"
                            alt="Meble" style="display: block" /></a>
                </th>
                <th>
                    <a href="https://www.beliani.pl/dodatki/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_pl_03.jpg" width="100%" border="0"
                            alt="Akcesoria" style="display: block" /></a>
                </th>
                <th>
                    <a href="https://www.beliani.pl/ogrod/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_pl_04.jpg" width="100%" border="0"
                            alt="Ogród" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  HU: (type, id) => {
    const newsletter = `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Ingyenes szállítás és visszaküldés</span>
        <span class="title-advantages-item">✔️ Széles választék</span>
    </p>

    <p class="newsletterRecommendationHeader">
        Hírlevelünk nem jelenik meg tökéletesen? Nézd meg az <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="[[newsshowurl]]">online verziót.</a>
        Add hozzá a Belianit <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="https://www.beliani.hu/content/whitelist-emails-hu/">fehérlistádhoz.</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.hu/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.hu/nappali-butorok/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_hu_02.jpg" width="100%" border="0"
                            alt="Bútorok" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.hu/otthoni-kiegeszitok/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_hu_03.jpg" width="100%" border="0"
                            alt="Kiegészítők" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.hu/kerti-garniturak/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_hu_04.jpg" width="100%" border="0"
                            alt="Kültér" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  NL: (type, id) => {
    const newsletter = `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Gratis levering & retour</span>
        <span class="title-advantages-item">✔️ Beste selectie</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Wordt deze nieuwsbrief niet correct weergegeven? Naar de <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">online versie.</a>
        Voeg Beliani toe aan je <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.nl/content/whitelist-emails-nl/">whitelist</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.nl/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.nl/woonkamer/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_nl_02.jpg" width="100%" border="0"
                            alt="Meubels" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.nl/woonaccessoires/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_nl_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.nl/tuinmeubelen/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_nl_04.jpg" width="100%" border="0"
                            alt="Tuin" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  SE: (type, id) => {
    const newsletter = `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Gratis leverans och retur</span>
        <span class="title-advantages-item">✔️ Bästa urvalet</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Ser du inte bilderna? Gå till vår <a class="newsletterRecommendationHeaderLink" href="[[newsshowurl]]" style="color: #000;">onlineversion.</a>
        Lägg till Beliani i din <a class="newsletterRecommendationHeaderLink" href="https://www.beliani.se/content/whitelist-emails-se/" style="color: #000;">vitlista</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.se/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.se/vardagsrumsmobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_se_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.se/hemtillbehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_se_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.se/tradgardsmobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_se_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  DK: (type, id) => {
    const newsletter = `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Gratis levering og returnering</span>
        <span class="title-advantages-item">✔️ Bedste udvalg</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Kan du ikke se billeder? Tjek online version <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="[[newsshowurl]]">af vores webshop.</a>
        Tilføj Beliani til din <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="https://www.beliani.dk/content/whitelist-emails-dk/">whitelist</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.dk/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.dk/stuemobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dk_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.dk/boligtilbehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dk_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.dk/havemobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_dk_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  CZ: (type, id) => {
    const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Doručení a vrácení zdarma</span>
        <span class="title-advantages-item">✔️ Nejlepší výběr</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Máte problémy se zobrazením newsletteru? Tady zobrazíte <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">online verzi.</a>
        Přidejte Beliani mezi <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.cz/content/whitelist-emails-cz/">povolené e-mailové adresy</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.cz/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.cz/nabytek-do-obyvaku/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_cz_02.jpg" width="100%" border="0"
                            alt="Nábytek" style="display:block" /></a></th>
                <th><a href="https://www.beliani.cz/doplnky/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_cz_03.jpg" width="100%" border="0"
                            alt="Doplnky" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.cz/zahradni-nabytek/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_cz_04.jpg" width="100%" border="0"
                            alt="Zahrada" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  FI: (type, id) => {
    const newsletter = `
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Ilmainen toimitus ja palautus</span>
        <span class="title-advantages-item">✔️ Paras valikoima</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Eikö uutiskirje näy kunnolla? Avaa <a href="[[newsshowurl]]" class="newsletterRecommendationHeaderLink" style="color: #000000;">uutiskirje selaimessa.</a>
        Lisää Beliani sähköpostisi <a href="https://www.beliani.fi/content/whitelist-emails-fi/" class="newsletterRecommendationHeaderLink" style="color: #000000;">valkolistalle.</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.fi/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.fi/olohuoneen-kalusteet/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fi_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.fi/sisustustuotteet/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fi_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.fi/puutarhakalusteet/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_fi_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  NO: (type, id) => {
    const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Gratis levering</span>
        <span class="title-advantages-item">✔️ Beste utvalg</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Har du problemer med å se nyhetsbrevet? Se <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="[[newsshowurl]]">online versjonen.</a>
        Legg til Beliani i din <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="https://www.beliani.no/content/whitelist-emails-no/">hviteliste</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.no/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.no/stuemoebler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_no_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.no/tilbehoer/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_no_03.jpg" width="100%" border="0"
                            alt="Tilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.no/hagemoebler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            src="https://beliani.info/newsletter/2022/header_no_04.jpg" width="100%" border="0"
                            alt="Hage" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  SK: (type, id) => {
    const newsletter = `
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Bezplatné doručenie a vrátenie</span>
        <span class="title-advantages-item">✔️ Najlepší výber</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Máte problémy s čítaním e-mailu? Pozrite si <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="[[newsshowurl]]">online verziu.</a>
        Pridajte Beliani medzi <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="https://www.beliani.sk/content/whitelist-emails-sk/">povolené e-mailové adresy</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.sk/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            alt="Beliani" width="100%" border="0" /></a></th>
            </tr>
        </tbody>
    </table>
    <table style="margin: 0 auto; background-color: #ffffff; padding-top: 0em; padding-bottom: 0em;" border="0"
        cellspacing="0" cellpadding="0" align="center">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.sk/nabytok-do-obyvacky/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_02.jpg"
                            alt="Nábytok" width="100%" border="0" /></a></th>
                <th><a href="https://www.beliani.sk/doplnky/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_03.jpg"
                            alt="Doplnky" width="100%" border="0" /></a></th>
                <th><a href="https://www.beliani.sk/zahrada/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_04.jpg"
                            alt="Záhrada" width="100%" border="0" /></a></th>
            </tr>
        </tbody>
    </table>
      `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
};
