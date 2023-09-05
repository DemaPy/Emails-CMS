export default {
  DE: (
    text = " Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer">
                    <span class="newsletterFooterTitle">
                        Tausende weitere Möbel
                    </span>
                </td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tbody>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.de/sofas/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterSofas.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.de/betten/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterBeds.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.de/tische/kaffeetische/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterCoffee.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.de/stuehle/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterChairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.de/sessel/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterArmchairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.de/aufbewahrung/kommoden/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterSideboards.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFTBottom">
                                    <a
                                        href="https://www.beliani.de/lampen/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterLamps.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHTBottom">
                                    <a
                                        href="https://www.beliani.de/teppich/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterRugs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.de/content/klarna-de/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_deat.png" style="display:block" width="100%" /></a></td>
        </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="left" class="footer">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterTopBottomContainer">
                                                    <span class="newsletterFooterTitle">
                                                          Folge uns auf
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.instagram.com/beliani_deutschland/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Instagram">
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.facebook.com/beliani.de/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Facebook">
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="YouTube">
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.pinterest.de/belianide/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Pinterest">
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <!-- ADVANTAGES -->
            <tr>
                <td class="newsletterTopBottomContainer">
                    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                        <tbody>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.de/content/lieferung/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages1New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.de/content/uber-uns/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages2New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.de/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages3New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.de/content/agb/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages4New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer" align="left">
                    <span class="newsletterConditions" style="color: #000000;">*Bedingungen: ${text}</span>
                </td>
            </tr>
            <tr>
                <td
                    style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                    <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Newsletter
                            abbestellen</a>
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b><font style="font-size: 10px;">Impressum</font></b>
                        <br />Beliani GmbH, 6340 Baar, Schweiz<br />Telefonnummer: 0221 6778 9927; E-Mail-Adresse:
                        <a href="mailto:mail@beliani.de">mail@beliani.de</a>
                        <br />Handelsregister: Handelsregister des Kantons Zug, CH-170.4.009.724-3<br />USt-IDNr:
                        DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  CHDE: (
    text = "Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterFooter" style="max-width:650px; background-color:#ffffff; display: block;">
        <tbody>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Tausende weitere Möbel </span></td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.ch/sofas/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterSofas.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.ch/betten/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterBeds.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.ch/tische/kaffeetische/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterCoffee.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.ch/stuehle/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterChairs.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.ch/sessel/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterArmchairs.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.ch/aufbewahrung/kommoden/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterSideboards.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFTBottom"><a href="https://www.beliani.ch/lampen/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterLamps.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHTBottom"><a href="https://www.beliani.ch/teppich/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterRugs.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <!--KLARNA-->
            <tr>
                <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.ch/content/bezahlung/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" margin-top="30px" src="https://beliani.info/newsletter/2022/NsltBanner_dach.png" style="display:block" width="100%" /></a></td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="footer">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Folge uns auf </span></td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                            <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td class="newsletterSocialIcon"><a href="https://www.instagram.com/beliani_schweiz/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="Instagram" border="0" src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://www.facebook.com/beliani.ch/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="Facebook" border="0" src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="YouTube" border="0" src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://www.pinterest.com/belianich/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="Pinterest" border="0" src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <!-- ADVANTAGES -->
            <tr>
                <td class="newsletterTopBottomContainer">
                <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;" width="100%">
                    <tbody>
                        <tr>
                            <td><a href="https://www.beliani.ch/content/lieferung/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterAdvantages1New.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.ch/content/uber-uns/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterAdvantages2New.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.ch/content/faq/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterAdvantages3New.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.ch/content/agb/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterAdvantages4New.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td align="left" class="newsletterTopBottomContainer"><span class="newsletterConditions" style="color: #000000;">*Bedingungen: ${text}</span></td>
            </tr>
            <tr>
                <td style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Newsletter abbestellen</a></p>
                </td>
            </tr>
        </tbody>
    </table>
    
    <table align="center" border="0" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails"><span style="color: #000000;text-align: center; font-size:11px;"><b><font style="font-size: 10px;">Impressum</font> </b><br />
                Beliani GmbH, 6340 Baar, Schweiz<br />
                Telefonnummer: 043 508 22 33; E-Mail-Adresse: <a href="mailto:mail@beliani.ch">mail@beliani.ch</a><br />
                Handelsregister: Handelsregister des Kantons Zug, CH-170.4.008.869-6<br />
                USt-IDNr: CHE-114.825.869 MWST </span></td>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  AT: (
    text = "Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
        border="0" align="center">
        <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
            <tr>
                <td class="newsletterTopBottomContainer">
                    <span class="newsletterFooterTitle">
                        Tausende weitere Möbel
                    </span>
                </td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tbody>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.at/sofas/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterSofas.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.at/betten/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterBeds.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.at/tische/kaffeetische/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterCoffee.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.at/stuehle/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterChairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.at/sessel/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterArmchairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.at/aufbewahrung/kommoden/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterSideboards.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFTBottom">
                                    <a
                                        href="https://www.beliani.at/lampen/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterLamps.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHTBottom">
                                    <a
                                        href="https://www.beliani.at/teppich/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterRugs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.at/content/klarna-at/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_deat.png" style="display:block" width="100%" /></a></td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
            <tr>
                <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="left" class="footer">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterTopBottomContainer">
                                                    <span class="newsletterFooterTitle">
                                                          Folge uns auf
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.instagram.com/beliani_oesterreich/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Instagram"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.facebook.com/beliani.oesterreich/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Facebook"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                            width="100%" border="0" style="display:block;" alt="YouTube"
                                                               >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://pinterest.com/belianiat/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Pinterest"    >
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <!-- ADVANTAGES -->
            <tr>
                <td class="newsletterTopBottomContainer">
                    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://www.beliani.at/content/lieferung/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages1New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.at/content/uber-uns/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages2New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.at/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages3New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.at/content/agb/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages4New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer" align="left">
                    <span class="newsletterConditions" style="color: #000000;">*Bedingungen: ${text}</span>
                </td>
            </tr>
            <tr>
                <td
                    style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                    <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Newsletter abbestellen</a>
                    </p>
                </td>
            </tr>

        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b><font style="font-size: 10px;">Impressum</font>
                        </b><br />
                        Beliani GmbH, 6340 Baar, Schweiz<br />
                        Telefonnummer: +43 1 375 00 57; E-Mail Adresse: <a
                            href="mailto:mail@beliani.at">mail@beliani.at</a><br />
                        Handelsregister: Handelsregister des Kantons Zug, CH-170.4.009.724-3<br />
                        USt-IDNr: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  FR: (
    text = "Tous les articles sont soumis à la disponibilité. Tous les prix sont susceptibles d'être modifiés sans notification.",
    type,
    id
  ) => {
    const newsletter = `
    <!--FOOTER-->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
     border="0" align="center">
     <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
         <tr>
             <td class="newsletterTopBottomContainer">
                 <span class="newsletterFooterTitle">
                 En voir beaucoup plus
              </span>
             </td>
         </tr>
         <tr>
             <td class="newsletterFooterCategories">
                 <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                     <tbody>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fr/meubles-de-salon/canapes/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_08.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fr/lits/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_10.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fr/tables/tables-basses/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_14.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fr/chaises/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_15.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fr/fauteuils/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_18.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fr/meubles-de-salon/rangement/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023footer_19.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFTBottom">
                                 <a
                                     href="https://www.beliani.fr/lampes/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_22.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHTBottom">
                                 <a
                                     href="https://www.beliani.fr/tapis/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_23.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.fr/content/paiement/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_fr.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td align="center">
                 <table cellpadding="0" cellspacing="0" border="0" width="100%">
                     <tbody>
                         <tr>
                             <td align="left" class="footer">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterTopBottomContainer">
                                                 <span class="newsletterFooterTitle">
                                                 Suivez-nous
                                              </span>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                             <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.instagram.com/beliani_fr/?hl=fr?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Instagram"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.facebook.com/beliani.fr/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Facebook"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                         width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.pinterest.fr/belianifr/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Pinterest"    >
                                                 </a>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <!-- ADVANTAGES -->
         <tr>
             <td class="newsletterTopBottomContainer">
                 <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                     <tbody>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fr/content/livraison//?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_27.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fr/content/a-propos-de-nous/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_28.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fr/content/centre-d-aide/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_29.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fr/content/cgv/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_30.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td class="newsletterTopBottomContainer" align="left">
                 <span class="newsletterConditions" style="color: #000000;">*Conditions: ${text}</span>
             </td>
         </tr>
         <tr>
             <td
                 style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                 <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Désabonnement</a>
                 </p>
             </td>
         </tr>

     </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
     <tbody>
         <tr>
             <td align="center" class="newsletterFooterCompanyDetails">
                 <span style="color: #000000;text-align: center; font-size:11px;">
                     <b><font style="font-size: 10px;">Mentions légales</font></b>
                     <br />
                     Beliani GmbH, 6340 Baar, Suisse<br />
                     téléphone: 01 87 39 86 15; adresse e-mail : <a href="mailto:mail@beliani.fr">mail@beliani.fr</a><br>
                         Commercial Register: Commercial Register of the Canton of
              Zug, CH-170.4.008.869-6<br />USt-IDNr: DE 276156472
                 </span>
             </td>
         </tr>
     </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  CHFR: (
    text = "Tous les articles sont soumis à la disponibilité. Tous les prix sont susceptibles d'être modifiés sans notification.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
    border="0" align="center">
    <tbody>
       <tr>
           <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
       </tr>
        <tr>
            <td class="newsletterTopBottomContainer">
                <span class="newsletterFooterTitle">
                En voir beaucoup plus
             </span>
            </td>
        </tr>
        <tr>
            <td class="newsletterFooterCategories">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tbody>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.ch/meubles-de-salon/canapes/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_08.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.ch/lits/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_10.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.ch/tables/tables-basses/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_14.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.ch/chaises/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_15.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.ch/fauteuils/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_18.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.ch/meubles-de-salon/rangement/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023footer_19.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFTBottom">
                                <a
                                    href="https://www.beliani.ch/lampes/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_22.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHTBottom">
                                <a
                                    href="https://www.beliani.ch/tapis/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_23.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
           <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
       </tr>
       <!--KLARNA-->
       <tr>
           <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.ch/content/paiement/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_chfr.png" style="display:block" width="100%" /></a></td>
       </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="footer">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td class="newsletterTopBottomContainer">
                                                <span class="newsletterFooterTitle">
                                                Suivez-nous
                                             </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.instagram.com/beliani_schweiz/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                    <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Instagram"    >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.facebook.com/beliani.ch/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                    <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Facebook"    >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                    <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                        width="100%" border="0" style="display:block;" alt="YouTube"
                                                           >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://pinterest.com/belianich/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                    <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Pinterest"    >
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <!-- ADVANTAGES -->
        <tr>
            <td class="newsletterTopBottomContainer">
                <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                    <tbody>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.ch/content/livraison/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_27.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.ch/content/a-propos-de-nous/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_28.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.ch/content/faq/#7._Kann_ich_die_Garantie_auf_meinen_M_beln_auch_verl_ngern_/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_29.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.ch/content/cgv?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_30.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer" align="left">
                <span class="newsletterConditions" style="color: #000000;">*Conditions: ${text}</span>
            </td>
        </tr>
        <tr>
            <td
                style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Désabonnement</a>
                </p>
            </td>
        </tr>

    </tbody>
   </table>
   <table cellspacing="0" cellpadding="0" border="0" align="center">
       <tbody>
           <tr>
               <td align="center" class="newsletterFooterCompanyDetails">
                   <span style="color: #000000;text-align: center; font-size:11px;">
                       <b><font style="font-size: 10px;">Mentions légales</font></b>
                       <br />
                       Beliani GmbH, 6340 Baar, Suisse<br />
                       Téléphone: 043 508 22 33; E-Mail: <a href="mailto:mail@beliani.ch">mail@beliani.ch</a><br>
                           CH-170.4.008.869-6<br />USt-IDNr: CHE-114.825.869 MWST
                   </span>
               </td>
           </tr>
       </tbody>
   </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  IT: (
    text = "Tutti gli articoli sono soggetti a disponibilità. Tutti i prezzi sono soggetti a modifiche senza preavviso.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
     border="0" align="center">
     <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
         <tr>
             <td class="newsletterTopBottomContainer">
                 <span class="newsletterFooterTitle">
                    Scopri migliaia di prodotti
                 </span>
             </td>
         </tr>
         <tr>
             <td class="newsletterFooterCategories">
                 <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                     <tbody>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.it/divani/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_08.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.it/letti/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_10.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.it/tavoli/tavolini/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_14.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.it/sedie/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_15.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.it/poltrone/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_19.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.it/soggiorno/mobili-portaoggetti/tutti+i+prodotti/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_20.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFTBottom">
                                 <a
                                     href="https://www.beliani.it/illuminazione/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_23.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHTBottom">
                                 <a
                                     href="https://www.beliani.it/tappeti/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_24.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.it/content/pagamento/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_it.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td align="center">
                 <table cellpadding="0" cellspacing="0" border="0" width="100%">
                     <tbody>
                         <tr>
                             <td align="left" class="footer">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterTopBottomContainer">
                                                 <span class="newsletterFooterTitle">
                                                    Seguici
                                                 </span>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                             <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.instagram.com/beliani_italia/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Instagram"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.facebook.com/belianiitalia/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Facebook"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                         width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.pinterest.com/belianiitalia/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Pinterest"    >
                                                 </a>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <!-- ADVANTAGES -->
         <tr>
             <td class="newsletterTopBottomContainer">
                 <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                     <tbody>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.it/content/consegna/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_28.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.it/content/chi-siamo/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_29.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.it/content/help-center_italian/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_30.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.it/content/termini-e-condizioni/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_31.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td class="newsletterTopBottomContainer" align="left">
                 <span class="newsletterConditions" style="color: #000000;">*Termini e Condizioni: ${text}</span>
             </td>
         </tr>
         <tr>
             <td
                 style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                 <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Annulla l’iscrizione</a>
                 </p>
             </td>
         </tr>

     </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b>
                            <font style="font-size: 10px;">Dettagli societari</font>
                        </b><br />
                        Beliani (DE) GmbH CH 6340 Baar Svizzera<br />
                        Numero di telefono: 06 5654 8602; Indirizzo e-mail: <a
                            href="mailto:mail@beliani.it">mail@beliani.it</a><br />
                            Registro commerciale (USt-IDNr): registro commerciale del Canton ZUG, CHE-115.695.894<br />Partita IVA: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  UK: (
    text = "All items are subject to availability. All prices are subject to change without notification.",
    type,
    id
  ) => {
    const newsletter = `
    <!--FOOTER-->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
     border="0" align="center">
     <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
         <tr>
             <td class="newsletterTopBottomContainer">
                 <span class="newsletterFooterTitle">
                 See thousands more
              </span>
             </td>
         </tr>
         <tr>
         <td class="newsletterFooterCategories">
             <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                 <tbody>
                     <tr>
                         <td class="newsletterFooterCategoryLEFT">
                             <a
                                 href="https://www.beliani.co.uk/sofas/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_08.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                         <td class="newsletterFooterCategoryRIGHT">
                             <a
                                 href="https://www.beliani.co.uk/beds/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_10.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                     </tr>
                     <tr>
                         <td class="newsletterFooterCategoryLEFT">
                             <a
                                 href="https://www.beliani.co.uk/tables/coffee-tables/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_14.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                         <td class="newsletterFooterCategoryRIGHT">
                             <a
                                 href="https://www.beliani.co.uk/chairs/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_15.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                     </tr>
                     <tr>
                         <td class="newsletterFooterCategoryLEFT">
                             <a
                                 href="https://www.beliani.co.uk/armchairs/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_18.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                         <td class="newsletterFooterCategoryRIGHT">
                             <a
                                 href="https://www.beliani.co.uk/storage/sideboards/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_19.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                     </tr>
                     <tr>
                         <td class="newsletterFooterCategoryLEFTBottom">
                             <a
                                 href="https://www.beliani.co.uk/lighting/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_22.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                         <td class="newsletterFooterCategoryRIGHTBottom">
                             <a
                                 href="https://www.beliani.co.uk/rugs/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_23.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                     </tr>
                 </tbody>
             </table>
         </td>
     </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.co.uk/content/klarna-uk/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_uk.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td align="center">
                 <table cellpadding="0" cellspacing="0" border="0" width="100%">
                     <tbody>
                         <tr>
                             <td align="left" class="footer">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterTopBottomContainer">
                                                 <span class="newsletterFooterTitle">
                                                 Follow us
                                              </span>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                             <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://instagram.com/beliani_uk/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Instagram"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.facebook.com/beliani.co.uk/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Facebook"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                         width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.pinterest.co.uk/belianiuk/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Pinterest"    >
                                                 </a>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <!-- ADVANTAGES -->
         <tr>
             <td class="newsletterTopBottomContainer">
                 <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                     <tbody>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.co.uk/content/delivery/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/uk2023uk_27.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.co.uk/content/about-us/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/uk2023uk_28.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.co.uk/content/faq-en/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/uk2023uk_29.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.co.uk/content/terms-and-conditions/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/uk2023uk_30.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td class="newsletterTopBottomContainer" align="left">
                 <span class="newsletterConditions" style="color: #000000;">*Conditions: ${text}</span>
             </td>
         </tr>
         <tr>
             <td
                 style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                 <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Unsubscribe</a>
                 </p>
             </td>
         </tr>

     </tbody>
      
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b>
                            <font style="font-size: 10px;">Company Details</font>
                        </b><br />
                        Beliani (UK) GmbH 6340 Baar Switzerland<br />Phone: 020 3318 8222; E-mail address:
                <a href="mailto:mail@beliani.co.uk">mail@beliani.co.uk</a><br>
                            Commercial Register: Commercial Register of the Canton of
                Zug, CH-170.4.008.869-6<br />VAT ID: CHE-114.825.869 VAT
                    </span>
                </td>
                
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  ES: (
    text = "Los artículos están sujetos a disponibilidad. Los precios pueden variar sin notificación previa.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
        border="0" align="center">
        <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
            <tr>
                <td class="newsletterTopBottomContainer">
                    <span class="newsletterFooterTitle">
                        Ver mucho más
                    </span>
                </td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tbody>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.es/sofas/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_08.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.es/camas/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_10.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.es/mesas/mesas-de-centro/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_14.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.es/sillas/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_15.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.es/sillones/??utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_19.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.es/organizacion-y-almacenaje/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_20.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFTBottom">
                                    <a
                                        href="https://www.beliani.es/lamparas/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_23.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHTBottom">
                                    <a
                                        href="https://www.beliani.es/alfombras/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_24.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.es/content/metodos-de-pago/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_es.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
            <tr>
                <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="left" class="footer">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterTopBottomContainer">
                                                    <span class="newsletterFooterTitle">
                                                        Síguenos
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.instagram.com/beliani.espana/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Instagram"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.facebook.com/beliani.espana/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Facebook"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                            width="100%" border="0" style="display:block;" alt="YouTube"
                                                               >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.pinterest.com/belianies/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Pinterest"    >
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <!-- ADVANTAGES -->
            <tr>
                <td class="newsletterTopBottomContainer">
                    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                        <tbody>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.es/content/envio/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_28.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.es/content/sobre-nosotros/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_29.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.es/content/centro-de-ayuda/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_30.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.es/content/condiciones-generales/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_31.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer" align="left">
                    <span class="newsletterConditions" style="color: #000000;">*Condiciones: ${text}</span>
                </td>
            </tr>
            <tr>
                <td
                    style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                    <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Cancelar suscripción</a>
                    </p>
                </td>
            </tr>

        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b><font style="font-size: 10px;">Datos de empresa</font></b>
                        <br />
                        Beliani (DE) GmbH CH 6340 Baar Suiza<br />
                        teléfono: 911 987 330; dirección e-mail: <a
                            href="mailto:mail@beliani.es">mail@beliani.es</a><br />
                        Registro comercial: Registro comercial de cantón ZUG, CHE-115.695.894<br />
                        USt-IDNr: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  PT: (
    text = "Oferta limitada ao stock disponível. Todos os preços podem estar sujeitos a alterações sem aviso prévio.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterFooter" style="max-width:650px; background-color:#ffffff; display: block;">
    <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Veja muito mais </span></td>
        </tr>
        <tr>
            <td class="newsletterFooterCategories">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.pt/sofas/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_03.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.pt/camas/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_05.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.pt/mesas/mesas-de-centro/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_09.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.pt/cadeiras/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_10.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.pt/poltrona/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_13.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.pt/arrumacao/aparadores/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_14.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFTBottom"><a href="https://www.beliani.pt/candeeiros/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_17.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHTBottom"><a href="https://www.beliani.pt/tapetes/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_18.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.pt/content/pagamento/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_pt.png" style="display:block" width="100%" /></a></td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td align="left" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Siga-nos </span></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                        <td align="right" style="padding-right:5px;" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterSocialIcon"><a href="https://www.instagram.com/beliani_portugal/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="Instagram" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.facebook.com/belianiportugal/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="Facebook" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="YouTube" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://pl.pinterest.com/belianiportugal/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="Pinterest" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!-- ADVANTAGES -->
                        <tr>
            <td class="newsletterTopBottomContainer">
            <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;" width="100%">
                <tbody>
                    <tr>
                        <td><a href="https://www.beliani.pt/content/entrega/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_2_06.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.pt/content/sobre-nos/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_2_07.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.pt/content/faq-pt/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_2_08.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.pt/content/termos-e-condicoes/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_2_09.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
                        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="left" class="newsletterTopBottomContainer"><span class="newsletterConditions" style="color: #000000;">*Termos e Condições: ${text}</span></td>
        </tr>
        <tr>
            <td style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
            <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Cancelar a subscrição</a></p>
            </td>
        </tr>
    </tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0">
    <tbody>
        <tr>
            <td align="center" class="newsletterFooterCompanyDetails"><span style="color: #000000;text-align: center; font-size:11px;"><b><font style="font-size: 10px;">Detalhes da Empresa</font> </b><br />
            Beliani (DE) GmbH CH 6340 Baar Suíça<br />
            Telefone: +351 21 145 00 19; E-mail: <a href="mailto:mail@beliani.pt">mail@beliani.pt</a><br />
            Registo Comercial: Reg. comercial do cantão ZUG, CHE-115.695.894<br />
            USt-IDNr: DE 276156472 </span></td>
        </tr>
    </tbody>
</table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  PL: (
    text = "Promocja obowiązuje do wyczerpania zapasów. Zastrzegamy sobie prawo do zmiany cen.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
      border="0" align="center">
      <tbody>
         <tr>
             <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
         </tr>
          <tr>
              <td class="newsletterTopBottomContainer">
                  <span class="newsletterFooterTitle">
                  Zobacz jeszcze więcej
               </span>
              </td>
          </tr>
          <tr>
              <td class="newsletterFooterCategories">
                  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                      <tbody>
                          <tr>
                              <td class="newsletterFooterCategoryLEFT">
                                  <a
                                      href="https://www.beliani.pl/sofy/wszystkie+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_08.jpg" alt=""
                                          style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                              <td class="newsletterFooterCategoryRIGHT">
                                  <a
                                      href="https://www.beliani.pl/lozka/wszystkie+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_10.jpg" alt=""
                                          style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td class="newsletterFooterCategoryLEFT">
                                  <a
                                      href="https://www.beliani.pl/stoly/stoliki-kawowe/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_14.jpg" alt=""
                                          style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                              <td class="newsletterFooterCategoryRIGHT">
                                  <a
                                      href="https://www.beliani.pl/krzesla/wszystkie+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_15.jpg" alt=""
                                          style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                          <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.pl/fotele/wszystkie+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/pl2023pl_18.jpg" alt=""
                                            style="display:block" width="100%" border="0">
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.pl/przechowywanie/komody/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/pl2023pl_19.jpg" alt=""
                                            style="display:block" width="100%" border="0">
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFTBottom">
                                    <a
                                        href="https://www.beliani.pl/oswietlenie/wszystkie+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/pl2023pl_22.jpg" alt=""
                                            style="display:block" width="100%" border="0">
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHTBottom">
                                    <a
                                        href="https://www.beliani.pl/dywany/wszystkie+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/pl2023pl_23.jpg" alt=""
                                            style="display:block" width="100%" border="0">
                                    </a>
                                </td>
                            </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
          <tr>
             <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
         </tr>
         <!--KLARNA-->
         <tr>
             <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.pl/content/platnosc/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_pl.png" style="display:block" width="100%" /></a></td>
         </tr>
          <tr>
              <td>
                  <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
              </td>
          </tr>
          <tr>
              <td align="center">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tbody>
                          <tr>
                              <td align="left" class="footer">
                                  <table cellpadding="0" cellspacing="0" border="0">
                                      <tbody>
                                          <tr>
                                              <td class="newsletterTopBottomContainer">
                                                  <span class="newsletterFooterTitle">
                                                  Znajdź nas
                                               </span>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                              <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                  <table cellpadding="0" cellspacing="0" border="0">
                                      <tbody>
                                          <tr>
                                              <td class="newsletterSocialIcon">
                                                  <a
                                                      href="https://www.instagram.com/beliani_polska/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                      <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                          width="100%" border="0" style="display:block;"
                                                          alt="Instagram"    >
                                                  </a>
                                              </td>
                                              <td class="newsletterSocialIcon">
                                                  <a
                                                      href="https://www.facebook.com/BelianiPolska/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                      <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                          width="100%" border="0" style="display:block;"
                                                          alt="Facebook"    >
                                                  </a>
                                              </td>
                                              <td class="newsletterSocialIcon">
                                                  <a
                                                      href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                      <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                          width="100%" border="0" style="display:block;" alt="YouTube"
                                                             >
                                                  </a>
                                              </td>
                                              <td class="newsletterSocialIcon">
                                                  <a
                                                      href="https://www.pinterest.com/belianipl/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                      <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                          width="100%" border="0" style="display:block;"
                                                          alt="Pinterest"    >
                                                  </a>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
          <tr>
              <td>
                  <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
              </td>
          </tr>
          <tr>
              <td class="newsletterKlarnaBannerContainer"><a href="https://www.facebook.com/BelianiAtWork/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/WorkBanner_PL.png" style="display:block" width="100%" /></a></td>
         </tr>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
          <!-- ADVANTAGES -->
          <tr>
              <td class="newsletterTopBottomContainer">
                  <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                      <tbody>
                          <tr>
                              <td>
                                  <a
                                      href="https://www.beliani.pl/content/dostawa/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_27.jpg"
                                          alt="" style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <a
                                      href="https://www.beliani.pl/content/o-nas/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_28.jpg"
                                          alt="" style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <a
                                      href="https://www.beliani.pl/content/najczesciej-zadawane-pytania/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_29.jpg"
                                          alt="" style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <a
                                      href="https://www.beliani.pl/content/ogolne-warunki-handlowe/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_30.jpg"
                                          alt="" style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
          <tr>
              <td>
                  <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
              </td>
          </tr>
          <tr>
              <td class="newsletterTopBottomContainer" align="left">
                  <span class="newsletterConditions" style="color: #000000;">*Warunki: ${text}</span>
              </td>
          </tr>
          <tr>
              <td
                  style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                  <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Wypisz się z newslettera</a>
                  </p>
              </td>
          </tr>
 
      </tbody>
       
     </table>
     <table cellspacing="0" cellpadding="0" border="0" align="center">
         <tbody>
             <tr>
                 <td align="center" class="newsletterFooterCompanyDetails">
                     <span style="color: #000000;text-align: center; font-size:11px;">
                         <b>
                             <font style="font-size: 10px;">Dane Firmy</font>
                         </b><br />
                         Beliani (DE) GmbH CH 6340 Baar Szwajcaria<br />Telefon:
                 +48 91 350 83 60; E-mail:
                 <a href="mailto:mail@beliani.pl">mail@beliani.pl</a><br>
                             Rejestr handlowy: Rejestr handlowy kantonu Zug,
                 CH-170.4.008.869-6<br />NIP: CHE-114.825.869 VAT
                     </span>
                 </td>
             </tr>
         </tbody>
     </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  HU: (
    text = "Áraink a készlet erejéig érvényesek. Az árváltoztatás jogát előzetes bejelentés nélkül is fenntartjuk.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterFooter" style="max-width:650px; background-color:#ffffff; display: block;">
    <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Mutass többet </span></td>
        </tr>
        <tr>
            <td class="newsletterFooterCategories">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.hu/kanapek/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_03.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.hu/agyak/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_05.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.hu/asztalok/dohanyzoasztalok/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_09.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.hu/szekek/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_10.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.hu/fotelek/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_13.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.hu/tarolo-szekrenyek/komodok/?sort=-visits/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_14.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFTBottom"><a href="https://www.beliani.hu/lampak/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_17.png" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHTBottom"><a href="https://www.beliani.hu/szonyegek/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_18.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td align="left" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Kövess minket </span></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                        <td align="right" style="padding-right:5px;" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterSocialIcon"><a href="https://www.instagram.com/beliani_magyarorszag/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="Instagram" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.facebook.com/Beliani-Magyarorsz%C3%A1g-1564931000428515/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="Facebook" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="YouTube" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://pinterest.com/beliani_magyarorszag/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="Pinterest" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!-- ADVANTAGES -->
                <tr>
            <td class="newsletterTopBottomContainer">
            <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;" width="100%">
                <tbody>
                    <tr>
                        <td><a href="https://www.beliani.hu/content/szallitas/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_2_06.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.hu/content/rolunk/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_2_07.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.hu/content/faq/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_2_08.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.hu/content/aszf/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_2_09.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
                <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="left" class="newsletterTopBottomContainer"><span class="newsletterConditions" style="color: #000000;">*Feltételek: ${text}</span></td>
        </tr>
        <tr>
            <td style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
            <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Leiratkozás</a></p>
            </td>
        </tr>
    </tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0">
    <tbody>
        <tr>
            <td align="center" class="newsletterFooterCompanyDetails"><span style="color: #000000;text-align: center; font-size:11px;"><b><font style="font-size: 10px;">Impresszum</font> </b><br />
            Beliani (DE) GmbH CH 6340 Baar Schweiz<br />
            Telefonszám: +36 1 700 8555; E-mail cím: <a href="mailto:mail@beliani.hu">mail@beliani.hu</a><br />
            Cégjegyzékszám: Zug kanton cégbírósága, CHE-115.695.894<br />
            Közösségi adószám: DE 276156472</span></td>
        </tr>
    </tbody>
</table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  NL: (
    text = "Alle producten zijn afhankelijk van de voorraad. Alle prijzen kunnen zonder melden worden gewijzigd.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
        border="0" align="center">
        <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
            <tr>
                <td class="newsletterTopBottomContainer">
                    <span class="newsletterFooterTitle">
                        Bekijk er nog duizenden
                    </span>
                </td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tbody>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.nl/banken/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterSofas.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.nl/bedden/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterBeds.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.nl/tafels/salontafels/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterCoffee.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.nl/stoelen/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterChairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.nl/fauteuils/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterArmchairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.nl/woonkamer/commodes-en-dressoirs/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterSideboards.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFTBottom">
                                    <a
                                        href="https://www.beliani.nl/lampen/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterLamps.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHTBottom">
                                    <a
                                        href="https://www.beliani.nl/tapijten/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterRugs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.nl/content/betalen/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_nl.png" style="display:block" width="100%" /></a></td>
        </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="left" class="footer">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterTopBottomContainer">
                                                    <span class="newsletterFooterTitle">
                                                        Volg ons
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.instagram.com/beliani_nl/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Instagram"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.facebook.com/beliani.nederland/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Facebook"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                            width="100%" border="0" style="display:block;" alt="YouTube"
                                                               >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://nl.pinterest.com/BelianiNederland/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                        <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Pinterest"    >
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <!-- ADVANTAGES -->
            <tr>
                <td class="newsletterTopBottomContainer">
                    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                        <tbody>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.nl/content/levering/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterAdvantages1New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.nl/content/over-ons/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterAdvantages2New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.nl/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterAdvantages3New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.nl/content/algemene-voorwaarden/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterAdvantages4New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer" align="left">
                    <span class="newsletterConditions" style="color: #000000;">*Voorwaarden: ${text}</span>
                </td>
            </tr>
            <tr>
                <td
                    style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                    <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Afmelden</a>
                    </p>
                </td>
            </tr>

        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b>
                            <font style="font-size: 10px;">Bedrijfsinformatie</font>
                        </b><br />Beliani (DE) GmbH CH 6340 Baar Switzerland<br />Telefoonnummer: (038) 7440 103;
                        E-mail adres:
                        <a href="mailto:mail@beliani.nl">mail@beliani.nl</a>
                        <br />Handelsregister: handelsregister van kanton ZUG, CHE-115.695.894<br />USt-IDNr: DE
                        276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  SE: (
    text = "Alla varor är beroende av tillgänglighet. Alla priser kan komma att ändras utan förvarning.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
    border="0" align="center">
    <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer">
                <span class="newsletterFooterTitle">
                    Se tusentals fler
                </span>
            </td>
        </tr>
        <tr>
            <td class="newsletterFooterCategories">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tbody>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.se/soffor/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_06.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.se/sangar/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_08.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.se/bord/soffbord/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_11.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.se/stolar/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_12.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.se/fatolj/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_15.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.se/forvaring/skap-och-skankar/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_16.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFTBottom">
                                <a
                                    href="https://www.beliani.se/lampor/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_20.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHTBottom">
                                <a
                                    href="https://www.beliani.se/mattor/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_21.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.se/content/klarna-se/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_se.png" style="display:block" width="100%" /></a></td>
        </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="footer">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td class="newsletterTopBottomContainer">
                                                <span class="newsletterFooterTitle">
                                                    Håll dig uppdaterad
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.instagram.com/beliani_sverige/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                    <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Instagram"    >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.facebook.com/beliani.sverige?fref=ts%3Futm_source%3Dnewsletter&utm_medium=email&utm_campaign=${id}">
                                                    <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Facebook"    >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                    <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                        width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.pinterest.com/belianisverige/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                    <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Pinterest"    >
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <!-- ADVANTAGES -->
        <tr>
            <td class="newsletterTopBottomContainer">
                <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                    <tbody>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.se/content/leverans/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_24.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.se/content/villkor/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_25.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.se/content/om-oss/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_27.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.se/content/sjalvbetjaning_swedish/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_28.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer" align="left">
                <span class="newsletterConditions" style="color: #000000;">*Villkor: ${text}</span>
            </td>
        </tr>
        <tr>
            <td
                style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Avanmäl dig</a>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b>
                            <font style="font-size: 10px;">Företagsuppgifter</font>
                        </b><br />
                        Beliani (DE) GmbH CH 6340 Baar Schweiz<br />
                        Phone: 08-446 891 58; E-mail address: <a
                            href="mailto:mail@beliani.se">mail@beliani.se</a><br />
                            Commercial Register: Commercial Register of the Canton of Zug<br />CHE-115.695.894, USt-IDNr: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  DK: (
    text = "Tilbud gælder så længe lager haves. Alle priser kan ændres uden varsel.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
     border="0" align="center">
     <tbody>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
         <tr>
             <td class="newsletterTopBottomContainer">
                 <span class="newsletterFooterTitle">
                    Se tusindvis af flere
                 </span>
             </td>
         </tr>
         <tr>
             <td class="newsletterFooterCategories">
                 <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                     <tbody>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.dk/sofaer/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_08.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.dk/senge/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_10.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.dk/borde/sofaborde/looks/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_14.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.dk/stuemobler/stole/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_15.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.dk/lenestole/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_19.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.dk/opbevaring/skaenke/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_20.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFTBottom">
                                 <a
                                     href="https://www.beliani.dk/belysning/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_23.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHTBottom">
                                 <a
                                     href="https://www.beliani.dk/gulvtepper/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_24.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.dk/content/betalingsmetoder/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_dk.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td align="center">
                 <table cellpadding="0" cellspacing="0" border="0" width="100%">
                     <tbody>
                         <tr>
                             <td align="left" class="footer">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterTopBottomContainer">
                                                 <span class="newsletterFooterTitle">
                                                    Hold dig opdateret
                                                 </span>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                             <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.instagram.com/beliani.danmark/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Instagram"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.facebook.com/beliani.dk?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Facebook"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                         width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.pinterest.com/belianidanmark/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Pinterest"    >
                                                 </a>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <!-- ADVANTAGES -->
         <tr>
             <td class="newsletterTopBottomContainer">
                 <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                     <tbody>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.dk/content/levering/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_28.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.dk/content/om-os/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_29.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.dk/content/hjaelp/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_30.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.dk/content/vilkar-og-betingelser/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_31.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td class="newsletterTopBottomContainer" align="left">
                 <span class="newsletterConditions" style="color: #000000;">*Vilkår og betingelser: ${text}</span>
             </td>
         </tr>
         <tr>
             <td
                 style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                 <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Afmeld nyhedsbrev</a>
                 </p>
             </td>
         </tr>

     </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b><font style="font-size: 10px;">Selskabs informationer</font></b>
                        <br />
                        Beliani (DE) GmbH CH 6340 Baar Schweiz<br />
                        Telefonnummer: 89 88 10 86; email adresse: <a
                            href="mailto:mail@beliani.dk">mail@beliani.dk</a><br />
                            Commercial Register: Commercial Register of the Canton of Zug, CHE-115.695.894<br />USt-IDNr: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  CZ: (
    text = "Všechny položky jsou závislé na dostupnosti. Všechny ceny se mohou bez upozornění změnit.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->	
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterFooter" style="max-width:650px; background-color:#ffffff; display: block;">
        <tbody>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Objevte další produkty</span></td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.cz/pohovky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_03.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.cz/postele/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_05.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.cz/stoly/konferencni-stolky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_09.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.cz/zidle-a-kresla/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_10.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.cz/kresla/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_13.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.cz/ulozny-prostor/regaly-a-komody/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_14.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFTBottom"><a href="https://www.beliani.cz/svitidla/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_17.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHTBottom"><a href="https://www.beliani.cz/koberce/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_18.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <!--KLARNA-->
            <tr>
                <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.cz/content/zpusoby-platby/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_cz.png" style="display:block" width="100%" /></a></td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="footer">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Sledujte nás na </span></td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                            <td align="right" style="padding-right:5px;" class="footer">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td class="newsletterSocialIcon"><a href="https://www.instagram.com/beliani.cz/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="Instagram" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://www.facebook.com/beliani.cz/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="Facebook" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="YouTube" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://pinterest.com/belianicz/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="Pinterest" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <!-- ADVANTAGES -->
                            <tr>
                <td class="newsletterTopBottomContainer">
                <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;" width="100%">
                    <tbody>
                        <tr>
                            <td><a href="https://www.beliani.cz/content/dodani/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/czfooter2023_2_06.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.cz/content/o-nas/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_2_07.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.cz/content/faq/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_2_08.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.cz/content/vseobecne-podminky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/czfooter2023_2_09.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
                            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td align="left" class="newsletterTopBottomContainer"><span class="newsletterConditions" style="color: #000000;">*Podmínky: ${text}</span></td>
            </tr>
            <tr>
                <td style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Odhlásit se</a></p>
                </td>
            </tr>
        </tbody>
    </table>
    
    <table align="center" border="0" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails"><span style="color: #000000;text-align: center; font-size:11px;"><b><font style="font-size: 10px;">Detaily společnosti</font></b><br />
                Beliani (DE) GmbH CH 6340 Baar Švýcarsko<br />
                Telefonní číslo: 228 881 514; E-mailová adresa: <a href="mailto:mail@beliani.cz">mail@beliani.cz</a><br />
                Obchodní registr: Obchodní registr Kantónu Zug, CH-170.4.008.869-6<br />
                USt-IDNr: CHE-114.825.869 MWST; DIČ: DE 276156472</span></td>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  FI: (
    text = "Tuotteet saatavuuden mukaan. Pidätämme oikeudet hinnanmuutoksiin ilman erillistä ilmoitusta.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
     border="0" align="center">
     <tbody>
                  <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
         <tr>
             <td class="newsletterTopBottomContainer">
                 <span class="newsletterFooterTitle">
                    Löydä tuhansia muita
                 </span>
             </td>
         </tr>
         <tr>
             <td class="newsletterFooterCategories">
                 <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                     <tbody>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fi/sohvat/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_06.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fi/sangyt/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_08.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fi/poydat/sohvapoydat/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_11.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fi/tuolit/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_12.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fi/nojatuolit/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_15.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fi/olohuoneen-kalusteet/sailytys/senkit/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_16.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFTBottom">
                                 <a
                                     href="https://www.beliani.fi/valaisimet/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_20.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHTBottom">
                                 <a
                                     href="https://www.beliani.fi/matot/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_21.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.fi/content/klarna-fi/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_fi.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td align="center">
                 <table cellpadding="0" cellspacing="0" border="0" width="100%">
                     <tbody>
                         <tr>
                             <td align="left" class="footer">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterTopBottomContainer">
                                                 <span class="newsletterFooterTitle">
                                                    Seuraa meitä
                                                 </span>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                             <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.instagram.com/beliani_suomi/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Instagram"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.facebook.com/belianisuomi/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Facebook"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                         width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.pinterest.com/belianisuomi/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                     <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Pinterest"    >
                                                 </a>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <!-- ADVANTAGES -->
         <tr>
             <td class="newsletterTopBottomContainer">
                 <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                     <tbody>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fi/content/toimitus/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_24.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fi/content/tietoja-meista/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_25.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fi/content/ohjekeskus/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_27.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fi/content/kayttoehdot/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_28.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td class="newsletterTopBottomContainer" align="left">
                 <span class="newsletterConditions" style="color: #000000;">*Ehdot: ${text}</span>
             </td>
         </tr>
         <tr>
             <td
                 style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                 <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Lopeta tilaus</a>
                 </p>
             </td>
         </tr>

     </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b><font style="font-size: 10px;">Yhtiön tiedot</font></b>
                        <br />
                        Beliani (DE) GmbH CH 6340 Baar Sveitsi<br />
                        Puhelinnumero: 09 4245 0464; sähköpostiosoite: <a
                            href="mailto:mail@beliani.fi">mail@beliani.fi</a><br />
                            Rekisteröity: Zugin kantonin kaupparekisteri, CHE-115.695.894<br />USt-IDNr: DE 276156472 MWST
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  NO: (
    text = "Alle varer er avhengig av tilgjengelighet. Alle priser kan endres uten varsel.",
    type,
    id
  ) => {
    const newsletter = `
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
   border="0" align="center">
   <tbody>
       <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
       <tr>
           <td class="newsletterTopBottomContainer">
               <span class="newsletterFooterTitle">
                Se tusenvis av våre
               </span>
           </td>
       </tr>
       <tr>
           <td class="newsletterFooterCategories">
               <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                   <tbody>
                       <tr>
                           <td class="newsletterFooterCategoryLEFT">
                               <a
                                   href="https://www.beliani.no/sofaer/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_08.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                           <td class="newsletterFooterCategoryRIGHT">
                               <a
                                   href="https://www.beliani.no/senger/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_10.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td class="newsletterFooterCategoryLEFT">
                               <a
                                   href="https://www.beliani.no/bord/sofabord/looks/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_14.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                           <td class="newsletterFooterCategoryRIGHT">
                               <a
                                   href="https://www.beliani.no/stoler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_15.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td class="newsletterFooterCategoryLEFT">
                               <a
                                   href="https://www.beliani.no/lenestoler/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_19.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                           <td class="newsletterFooterCategoryRIGHT">
                               <a
                                   href="https://www.beliani.no/oppbevaring/skjenker/looks/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_20.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td class="newsletterFooterCategoryLEFTBottom">
                               <a
                                   href="https://www.beliani.no/belysning/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_23.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                           <td class="newsletterFooterCategoryRIGHTBottom">
                               <a
                                   href="https://www.beliani.no/tepper/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_24.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                   </tbody>
               </table>
           </td>
       </tr>
       <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.no/content/klarna-no/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_no.png" style="display:block" width="100%" /></a></td>
        </tr>
       <tr>
           <td>
               <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
           </td>
       </tr>
       <tr>
           <td align="center">
               <table cellpadding="0" cellspacing="0" border="0" width="100%">
                   <tbody>
                       <tr>
                           <td align="left" class="footer">
                               <table cellpadding="0" cellspacing="0" border="0">
                                   <tbody>
                                       <tr>
                                           <td class="newsletterTopBottomContainer">
                                               <span class="newsletterFooterTitle">
                                                Følg oss
                                               </span>
                                           </td>
                                       </tr>
                                   </tbody>
                               </table>
                           </td>
                           <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                               <table cellpadding="0" cellspacing="0" border="0">
                                   <tbody>
                                       <tr>
                                           <td class="newsletterSocialIcon">
                                               <a
                                                   href="https://www.instagram.com/beliani_norge/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                   <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                       width="100%" border="0" style="display:block;"
                                                       alt="Instagram"    >
                                               </a>
                                           </td>
                                           <td class="newsletterSocialIcon">
                                               <a
                                                   href="https://www.facebook.com/BelianiNorge?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                   <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                       width="100%" border="0" style="display:block;"
                                                       alt="Facebook"    >
                                               </a>
                                           </td>
                                           <td class="newsletterSocialIcon">
                                               <a
                                                   href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                   <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                       width="100%" border="0" style="display:block;" alt="YouTube"
                                                          >
                                               </a>
                                           </td>
                                           <td class="newsletterSocialIcon">
                                               <a
                                                   href="https://www.pinterest.com/beliani_norge/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                                   <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                       width="100%" border="0" style="display:block;"
                                                       alt="Pinterest"    >
                                               </a>
                                           </td>
                                       </tr>
                                   </tbody>
                               </table>
                           </td>
                       </tr>
                   </tbody>
               </table>
           </td>
       </tr>
       <tr>
           <td>
               <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
           </td>
       </tr>
       <!-- ADVANTAGES -->
       <tr>
           <td class="newsletterTopBottomContainer">
               <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                   <tbody>
                       <tr>
                           <td>
                               <a
                                   href="https://www.beliani.no/content/levering/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_28.jpg"
                                       alt="" style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <a
                                   href="https://www.beliani.no/content/om-oss/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_29.jpg"
                                       alt="" style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <a
                                   href="https://www.beliani.no/content/hjelpesenter_norwegian/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_30.jpg"
                                       alt="" style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <a
                                   href="https://www.beliani.no/content/vilkar-og-betingelser/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_31.jpg"
                                       alt="" style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                   </tbody>
               </table>
           </td>
       </tr>
       <tr>
           <td>
               <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
           </td>
       </tr>
       <tr>
           <td class="newsletterTopBottomContainer" align="left">
               <span class="newsletterConditions" style="color: #000000;">*Vilkår: ${text}</span>
           </td>
       </tr>
       <tr>
           <td
               style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
               <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Avslutt abonnement</a>
               </p>
           </td>
       </tr>

   </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b>
                            <font style="font-size: 10px;">Selskapets Detaljer</font>
                        </b><br />
                        Beliani (DE) GmbH CH 6340 Baar Switzerland<br />
                        Telefonnummer: 21 56 31 51; E-postadresse: <a
                            href="mailto:mail@beliani.no">mail@beliani.no</a><br />
                            Commercial register: commercial register of canton ZUG, CHE-115.695.894<br />USt-IDNr: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `;

    const templates = {
      newsletter,
    };

    return templates[type];
  },
  SK: (
    text = "Všetky položky podliehajú dostupnosti. Všetky ceny sa môžu zmeniť bez upozornenia.",
    type,
    id
  ) => {
    const newsletter = `
    <!--FOOTER-->
<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterFooter" style="max-width:650px; background-color:#ffffff; display: block;">
    <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Objavte ďalšie produkty</span></td>
        </tr>
        <tr>
            <td class="newsletterFooterCategories">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.sk/pohovky/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_03.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.sk/postele/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_05.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.sk/stoly/konferencne-stoliky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_09.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.sk/stolicky-a-kresla/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_10.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.sk/kresla/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_13.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.sk/ulozny-priestor/nizke-skrinky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_14.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFTBottom"><a href="https://www.beliani.sk/svietidla/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_17.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHTBottom"><a href="https://www.beliani.sk/koberce/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_18.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td align="left" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Sledujte nás na </span></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                        <td align="right" style="padding-right:5px;" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterSocialIcon"><a href="https://www.instagram.com/beliani_sk/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="Instagram" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.facebook.com/BelianiSlovensko/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="Facebook" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="YouTube" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://pinterest.com/beliani_slovensko/?utm_source=newsletter&utm_medium=email&utm_campaign=${id}"><img alt="Pinterest" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!-- ADVANTAGES -->
                        <tr>
            <td class="newsletterTopBottomContainer">
            <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;" width="100%">
                <tbody>
                    <tr>
                        <td><a href="https://www.beliani.sk/content/dodanie/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_2_06.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.sk/content/o-nas/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_2_07.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.sk/content/faq/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_2_08.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.sk/content/vseobecne-podmienky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${id}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_2_09.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
                        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="left" class="newsletterTopBottomContainer"><span class="newsletterConditions" style="color: #000000;">*Podmienky: ${text}</span></td>
        </tr>
        <tr>
            <td style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
            <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Zrušiť odber</a></p>
            </td>
        </tr>
    </tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0">
    <tbody>
        <tr>
            <td align="center" class="newsletterFooterCompanyDetails"><span style="color: #000000;text-align: center; font-size:11px;"><b><font style="font-size: 10px;">Detaily spoločnosti</font> </b><br />
            Beliani (DE) GmbH CH 6340 Baar Švajčiarsko<br />
            Telefónne číslo: +421 2/327 846 12; E-mailová adresa: <a href="mailto:mail@beliani.sk">mail@beliani.sk</a><br />
            Obchodný register: Obchodný register kantónu Zug, CH-170.4.008.869-6<br />
            USt-IDNr: CHE-114.825.869 MWST; DIČ: DE 276156472</span></td>
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
