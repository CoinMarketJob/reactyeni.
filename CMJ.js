const App = () => {
    return (
        <div>
            <link rel="stylesheet" href="deneme.css" />
            <div className="u-navDesktop">
                <nav className="navbar navbar-default">
                    <div className="page-container">
                        <div className="navbar-header">
                            <div className="header-mobileToggle">
                                <a data-toggle="collapse" href="#header-nav" aria-expanded="false">
                                    <span><svg className="icon icon--large">
                                        <use xlinkHref="#nav" />
                                    </svg></span>
                                    <span className="hidden"><svg className="icon icon--large">
                                        <use xlinkHref="#close" />
                                    </svg></span>
                                </a>
                            </div>
                            <a className="header-logo" href="https://jobs.coinmarketcap.com"><img border={0} alt="CoinMarketCap" src="https://jobs.coinmarketcap.com/uploads/tenant/logo/10955/black.png" /></a>
                        </div>
                        <div id="header-nav" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav" data-js="navLinks">
                                <li className="nav-item active">
                                    <a href="https://jobs.coinmarketcap.com">All Jobs</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://jobs.coinmarketcap.com/products">Post a Job</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://jobs.coinmarketcap.com/employers">Employers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://jobs.coinmarketcap.com/pages/22065-about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://jobs.coinmarketcap.com/pages/22066-contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <ul id="account_navbar" className="header-right">
                            <li className="dropdown" id="profile-dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <svg className="u-mr--small icon icon--align icon-job-seekers">
                                        <use xlinkHref="#user" />
                                    </svg>
                                    <span className="hidden-xs">Job Seekers <svg className="u-ml--xsmall icon icon--small icon-flip">
                                        <use xlinkHref="#arrow-down" />
                                    </svg></span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a role="button" href="/profiles/sign_in">Log In</a></li>
                                    <li><a role="button" href="/profiles/sign_up">Create your Profile</a></li>
                                </ul>
                            </li>
                            <li className="dropdown" id="employer-dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <svg className="u-mr--small icon icon--align icon-employers">
                                        <use xlinkHref="#employers" />
                                    </svg>
                                    <span className="hidden-xs">Employers <svg className="u-ml--xsmall icon icon--small icon-flip">
                                        <use xlinkHref="#arrow-down" />
                                    </svg></span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a role="button" href="/employers/sign_in">Log In</a></li>
                                    <li><a role="button" href="/employers/sign_up">Create Employer Account</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div id="flash_messages">
            </div>
            <main id="main">
                <div id="homepage">
                    <section className="hero slim-hero" style={{ "background": "linear-gradient(120deg, #ffffff, #ffffff)" }} id="widget_43372">
                        <div className="page-container">
                            <div className="text-center u-contrast">
                                <div className>
                                </div>
                                <div>
                                    <form role="form" className="siteSearch" action="/jobs/search" acceptCharset="UTF-8" method="get">
                                        <div className="siteSearch-keyword">
                                            <input type="text" name="q" id="q" className="form-control input-lg input-preserve clearInput-input" placeholder="Keywords" autoComplete="off" aria-autocomplete="list" aria-haspopup="true" aria-label="Keywords" data-clear-label="Clear Keywords" /><button className="clearInput-clear" aria-label="Clear Keywords" type="button" tabIndex={-1}><svg className="icon">
                                                <use xlinkHref="#close" />
                                            </svg></button>
                                            <svg className="icon siteSearch-labelIcon">
                                                <use xlinkHref="#search" />
                                            </svg>
                                        </div>
                                        <div className="siteSearch-location dropdown">
                                            <a href="#" className="hidden" data-toggle="dropdown" />
                                            <input type="text" name="l" id="l" className="form-control input-lg input-preserve location-input ui-autocomplete-input clearInput-input" placeholder="Location" autoComplete="off" aria-autocomplete="list" aria-haspopup="true" aria-label="Location" data-location-autocomplete="true" data-location-geolocate="true" data-clear-label="Clear Location" /><button className="clearInput-clear" aria-label="Clear Location" type="button" tabIndex={-1}><svg className="icon">
                                                <use xlinkHref="#close" />
                                            </svg></button>
                                            <svg className="icon siteSearch-labelIcon">
                                                <use xlinkHref="#pin" />
                                            </svg>
                                            <input type="hidden" name="lat" id="job_alert_lat_siteSearch-location" data-location-lat="true" autoComplete="off" />
                                            <input type="hidden" name="long" id="job_alert_long_siteSearch-location" data-location-long="true" autoComplete="off" />
                                        </div>
                                        <div className="siteSearch-distance">
                                            <div className="dropdown">
                                                <a href="#" className="btn btn-lg distance-btn dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                    <svg className="icon icon--align">
                                                        <use xlinkHref="#location" />
                                                    </svg>
                                                    <span data-js="distanceLabel" style={{ "-webkit-text-transform": "none", "text-transform": "none" }}>Distance</span>
                                                    <svg className="icon icon--small icon-flip">
                                                        <use xlinkHref="#arrow-down" />
                                                    </svg>
                                                </a>
                                                <ul className="dropdown-menu siteSearch-dropdown">
                                                    <li><a href="#" data-distance={5}>5 Miles</a></li>
                                                    <li><a href="#" data-distance={10}>10 Miles</a></li>
                                                    <li><a href="#" data-distance={20}>20 Miles</a></li>
                                                    <li><a href="#" data-distance={50}>50 Miles</a></li>
                                                    <li><a href="#" data-distance={100}>100 Miles</a></li>
                                                    <li><a href="#" data-distance={9999}>Any</a></li>
                                                </ul>
                                            </div>
                                            <input type="hidden" name="d" id="d" autoComplete="off" />
                                        </div>
                                        <div className="siteSearch-submit">
                                            <button className="btn btn-lg btn-success">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="page-content">
                        <div className="page-container">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="panel panel-default panel-expand">
                                        <div className="panel-body">
                                            <h3 className="u-mt--remove u-mb--regular">Jobs from Our Partners </h3>
                                            <div id="load-backfill-ajax">
                                                <div className="ZipRecruiter-backfill">
                                                    <ul className="jobList">
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIEJsb2NrY2hhaW4gRGV2ZWxvcGVyIiwiMyI6Ik9LWCBWZW50dXJlcyIsIjQiOiJTYW4gSm9zZSwgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.x2CN5yVLiJydtAzK-OYd3xfG148KFx3oDdwoV6AkDgM" href="https://www.ziprecruiter.com/ek/tl/AAJf-AcjolLrxt4RzCV59ZXxKYKcSuvR9WiKeIKld9bsNqJdYAzyugOBTtABQhKYrajUyMF_r57MrbrltC51BYow7JLEOVE3BYFG-6UeXad58Sidfyg25dJ81wP9QFT8VdzCZo8yj1vQGH6iWNjb12Ihtm7_MypGElzhB6d0xHSAhN05swDgbkihVG_rsGBZdQdr_xpugaOYiqGj0wIH"><strong>Senior
                                                                        Blockchain Developer</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />OKX
                                                                            Ventures
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Jose, CA, USA
                                                                        </li>
                                                                    </ul>
                                                                    <div className="jobList-description">OKX innovatively adopted
                                                                        blockchain technology to reshape the financial ecosystem
                                                                        by offering some ... With its extensive range of crypto
                                                                        products and services, and unwavering commitment to
                                                                        innovation ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                30 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQ0VPIC0gQmxvY2tjaGFpbiBmb3IgV2ViMyAmIEVudGVycHJpc2UgTmV0d29ya3MgLSBCMkIyQyIsIjMiOiJSYW1wUmF0ZSIsIjQiOiJTYW4gSm9zZSwgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.EVJKCa3IFtbGmOsMU4Xcffjr9yxSKKOzkBhvmCoA6oM" href="https://www.ziprecruiter.com/k/tl/AAIaMaWPUQfG0iJzjcyh7VLVGQnE4Jw70kBT7MZ7uIz-gddp_2_7SdYDQeL6RaI76kScBWipynjiInCFrrCpHqjCcDiBj9SdtVQDKL9wsFJgIfHqiadaQuqiQ4vc9fyHjgz_Z2UTWfCspUUJ9PkjPcZCQ6M21vm8hjFtuI0oXFpxeoBBS_WQjBAAeJm19I1JrCHtOqJMEIPxEvpxYA"><strong>CEO
                                                                        - Blockchain for Web3 &amp; Enterprise Networks -
                                                                        B2B2C</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />RampRate
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Jose, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQ0VPIC0gQmxvY2tjaGFpbiBmb3IgV2ViMyAmIEVudGVycHJpc2UgTmV0d29ya3MgLSBCMkIyQyIsIjMiOiJSYW1wUmF0ZSIsIjQiOiJTYW4gSm9zZSwgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.EVJKCa3IFtbGmOsMU4Xcffjr9yxSKKOzkBhvmCoA6oM" href="https://www.ziprecruiter.com/k/tl/AAIaMaWPUQfG0iJzjcyh7VLVGQnE4Jw70kBT7MZ7uIz-gddp_2_7SdYDQeL6RaI76kScBWipynjiInCFrrCpHqjCcDiBj9SdtVQDKL9wsFJgIfHqiadaQuqiQ4vc9fyHjgz_Z2UTWfCspUUJ9PkjPcZCQ6M21vm8hjFtuI0oXFpxeoBBS_WQjBAAeJm19I1JrCHtOqJMEIPxEvpxYA"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">... current crypto winter.
                                                                        Our technological innovation is patented, protecting the
                                                                        project and ... Our founding team, which includes top
                                                                        technologists, blockchain experts, and veterans of
                                                                        high-value ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                27 Oct
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2l0ZSBTdXBlcnZpc29yIiwiMyI6IkVaIEJsb2NrY2hhaW4iLCI0IjoiSm9obnNvbiwgS1MsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.hqkAKF9d6M5_Jr54WCebtIp1h95S6cvyTgutb1l1-X8" href="https://www.ziprecruiter.com/k/tl/AAI4xGWFosUNq1_shx0jhZ7oLSKIKxD0_bmDqB5VP0KpJNUzwkMyWQSsj876mXzmpoT_ZjLcmUcoJ14mPoUm7Ckr-xXdtcYE-8H157NkmPEoCiVkb-I3RyEBSFW3Ix6PxLW2oZ_51Jt2FS828jbrDEF0RTFw2Qt0riBVmGLZsOUd-oJiRBWTo5LH2u-VxxfH-6sI7ney4gMGVLSNkQ"><strong>Site
                                                                        Supervisor</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />EZ
                                                                            Blockchain
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Johnson,
                                                                            KS, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2l0ZSBTdXBlcnZpc29yIiwiMyI6IkVaIEJsb2NrY2hhaW4iLCI0IjoiSm9obnNvbiwgS1MsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.hqkAKF9d6M5_Jr54WCebtIp1h95S6cvyTgutb1l1-X8" href="https://www.ziprecruiter.com/k/tl/AAI4xGWFosUNq1_shx0jhZ7oLSKIKxD0_bmDqB5VP0KpJNUzwkMyWQSsj876mXzmpoT_ZjLcmUcoJ14mPoUm7Ckr-xXdtcYE-8H157NkmPEoCiVkb-I3RyEBSFW3Ix6PxLW2oZ_51Jt2FS828jbrDEF0RTFw2Qt0riBVmGLZsOUd-oJiRBWTo5LH2u-VxxfH-6sI7ney4gMGVLSNkQ"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">Salary: 65k-72k Job
                                                                        description EZ Blockchain is a technology company with
                                                                        cryptocurrency mining and energy focus. Our mission is
                                                                        to solve the global waste energy problem with the help
                                                                        of crypto ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                20 Jul
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQmxvY2tjaGFpbiBSZXNlYXJjaCBBbmFseXN0IiwiMyI6IlZhbGlkYXRpb24gQ2xvdWQiLCI0IjoiU2FuIEZyYW5jaXNjbywgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.SlzqphuDLs71ug6h1fnsTr_pF9VW5yztblDI_htbNPg" href="https://www.ziprecruiter.com/k/tl/AAJ68Z2szxQvnSbpAAI2YmYNP8RMel-d3vJfxThfykmQ_Y1CUEr6z1zvUurZOOdZZot3lWnQMNBqIFDfAyVbO8NxJva3teICd0skR9DnNG5PDvDYYD1_PHVmwMWsbWmYATxotKYTGbvgM2t-RBXU4PWCTnjikEjzP6oNLtvW7G4MWsENzsvtwmZFchuAfBf7B6ERH9eKUN8XJydyzw"><strong>Blockchain
                                                                        Research Analyst</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Validation
                                                                            Cloud
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQmxvY2tjaGFpbiBSZXNlYXJjaCBBbmFseXN0IiwiMyI6IlZhbGlkYXRpb24gQ2xvdWQiLCI0IjoiU2FuIEZyYW5jaXNjbywgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.SlzqphuDLs71ug6h1fnsTr_pF9VW5yztblDI_htbNPg" href="https://www.ziprecruiter.com/k/tl/AAJ68Z2szxQvnSbpAAI2YmYNP8RMel-d3vJfxThfykmQ_Y1CUEr6z1zvUurZOOdZZot3lWnQMNBqIFDfAyVbO8NxJva3teICd0skR9DnNG5PDvDYYD1_PHVmwMWsbWmYATxotKYTGbvgM2t-RBXU4PWCTnjikEjzP6oNLtvW7G4MWsENzsvtwmZFchuAfBf7B6ERH9eKUN8XJydyzw"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">Gain a deep understanding
                                                                        of various relevant aspects of the crypto industry
                                                                        including technology ... blockchain projects * Ability
                                                                        to synthesize and articulate complex topics and provide
                                                                        concise ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                27 Oct
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQmxvY2tjaGFpbiBDb3JlIFByb3RvY29sIEVuZ2luZWVyIiwiMyI6IkFyZ3VzIExhYnMiLCI0IjoiU2FuIEZyYW5jaXNjbywgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.XurN-46juOTyFwTKg2avMaZDJaxIzFCYx4V51n9WH1o" href="https://www.ziprecruiter.com/k/tl/AAKq0Y9SvkKnR1H6UvGh9vmHNRTg6DEGadef7JSBOb8liOepIbxoGXs8pdDo7JaqAvx8vd8vHLyUS-HuswUJ4As2UE6WhvVAvIG1-75VmYoQB93IwUbdVwKMWEDm_wD3tKfT2koTAaqK1qCfzhAjw6BOvKtlkzvLcqeErKrAsjMhmKXF-Umu-Zp2V-uEW-2_kBQqY4Dqq8bGDETzYQ"><strong>Blockchain
                                                                        Core Protocol Engineer</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Argus Labs
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQmxvY2tjaGFpbiBDb3JlIFByb3RvY29sIEVuZ2luZWVyIiwiMyI6IkFyZ3VzIExhYnMiLCI0IjoiU2FuIEZyYW5jaXNjbywgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.XurN-46juOTyFwTKg2avMaZDJaxIzFCYx4V51n9WH1o" href="https://www.ziprecruiter.com/k/tl/AAKq0Y9SvkKnR1H6UvGh9vmHNRTg6DEGadef7JSBOb8liOepIbxoGXs8pdDo7JaqAvx8vd8vHLyUS-HuswUJ4As2UE6WhvVAvIG1-75VmYoQB93IwUbdVwKMWEDm_wD3tKfT2koTAaqK1qCfzhAjw6BOvKtlkzvLcqeErKrAsjMhmKXF-Umu-Zp2V-uEW-2_kBQqY4Dqq8bGDETzYQ"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">... crypto fund founded by
                                                                        ex-a16z GP Katie Haun) with participation from angels in
                                                                        tech and gaming ... Develop and maintain the World
                                                                        Engine, our core blockchain execution layer
                                                                        infrastructure. * Work ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                1 Apr
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQWNjb3VudCBNYW5hZ2VyLCBUZWNobm9sb2d5IFB1YmxpYyBSZWxhdGlvbnMiLCIzIjoiU3BhcmsiLCI0IjoiU2FuIEZyYW5jaXNjbywgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.w9ZnKRx73nYQ0Czx0Az5T854UY6ddvQL5IF0iWaIAro" href="https://www.ziprecruiter.com/k/tl/AAL17BLYGhZAser3-1einSMuFee_LVaw6f7O8PnjIXA3Dr8qhPO3t9eFz8HQ0IGYlRUceAIeVFSbcSUO8_O2R_TDnCI9Ob0qAoCa6n4dMoH7tDz5t4paWQYrIOHxhkO-Zh3w25WI0TRy6Gt9a0NjDLdsknylHYrkTYL9NxgrK2NKxmFgA-I3FyWcFtDTfXRY9twSyFR7mQj-oJmEDQ"><strong>Account
                                                                        Manager, Technology Public Relations</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Spark
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQWNjb3VudCBNYW5hZ2VyLCBUZWNobm9sb2d5IFB1YmxpYyBSZWxhdGlvbnMiLCIzIjoiU3BhcmsiLCI0IjoiU2FuIEZyYW5jaXNjbywgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.w9ZnKRx73nYQ0Czx0Az5T854UY6ddvQL5IF0iWaIAro" href="https://www.ziprecruiter.com/k/tl/AAL17BLYGhZAser3-1einSMuFee_LVaw6f7O8PnjIXA3Dr8qhPO3t9eFz8HQ0IGYlRUceAIeVFSbcSUO8_O2R_TDnCI9Ob0qAoCa6n4dMoH7tDz5t4paWQYrIOHxhkO-Zh3w25WI0TRy6Gt9a0NjDLdsknylHYrkTYL9NxgrK2NKxmFgA-I3FyWcFtDTfXRY9twSyFR7mQj-oJmEDQ"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">We view Blockchain and
                                                                        Crypto technologies as world-changing and are looking
                                                                        for the right person to join our team to help support in
                                                                        these and other technology-driven markets. If you have
                                                                        answered ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                30 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiTWluaW5nIFRlY2huaWNpYW4iLCIzIjoiRm91bmRyeSIsIjQiOiJNaW5kZW4sIE5FLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.-ORC8NynhfU-HzcPp1xlq7R-GdElOzOMyNAz6AQDSLQ" href="https://www.ziprecruiter.com/k/tl/AAK6DACaoJPuFiAJSkNa12oUUmyXgcd8jJ3O-9UyAjpgOQ0ICI-iL-WQrtj1PjaJIJmMdstN1r-r6a8DB0elMD1xAkY2OwDCbo_Seec39LdNOajB3UnDTD9ivXRFeaeTNGWtUnFdBQSuLWHruiCpEFMu3nVEtCUNrbWcFhV957bDrDoISTsC8ocgQ_RUhIikVft_uSfzSjfGCNVTsw"><strong>Mining
                                                                        Technician</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Foundry
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Minden,
                                                                            NE, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiTWluaW5nIFRlY2huaWNpYW4iLCIzIjoiRm91bmRyeSIsIjQiOiJNaW5kZW4sIE5FLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.-ORC8NynhfU-HzcPp1xlq7R-GdElOzOMyNAz6AQDSLQ" href="https://www.ziprecruiter.com/k/tl/AAK6DACaoJPuFiAJSkNa12oUUmyXgcd8jJ3O-9UyAjpgOQ0ICI-iL-WQrtj1PjaJIJmMdstN1r-r6a8DB0elMD1xAkY2OwDCbo_Seec39LdNOajB3UnDTD9ivXRFeaeTNGWtUnFdBQSuLWHruiCpEFMu3nVEtCUNrbWcFhV957bDrDoISTsC8ocgQ_RUhIikVft_uSfzSjfGCNVTsw"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">If you thrive on
                                                                        innovation, are inspired by the potential of blockchain
                                                                        technology and are ... Deploy new crypto mining units at
                                                                        the data centers * Maintain current operating fleet of
                                                                        crypto ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                27 Jul
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiTkZUIFByb2R1Y3QgT3duZXIgKE5DIFBhcnRuZXJzKSIsIjMiOiJOQ1NPRlQiLCI0IjoiTWVubG8gUGFyaywgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.7Gy-65ZnSZuhOBVDw8zjIJ-EtPr_FqtTZDvUVyfohls" href="https://www.ziprecruiter.com/k/tl/AAJtL4xHRMa-ahTkzY3Y0ygm7U-8cMhkYuexAv0lkU0tE8s2f_S1dIfQBITbb54Rbk8Qn1PephZtN5A7W23FqX5u4USfnbt5NtMgvMfHEieazdGiWKJYXkD0lc55SMiJWs-WjBJBC-TRoT3dEzMBpBhGFOwEtFSXu4-xBh3VomBkHUYGvLhDmStgv57sSKcYahn8kwkM2fIRMs2mbg"><strong>NFT
                                                                        Product Owner (NC Partners)</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />NCSOFT
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Menlo
                                                                            Park, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiTkZUIFByb2R1Y3QgT3duZXIgKE5DIFBhcnRuZXJzKSIsIjMiOiJOQ1NPRlQiLCI0IjoiTWVubG8gUGFyaywgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.7Gy-65ZnSZuhOBVDw8zjIJ-EtPr_FqtTZDvUVyfohls" href="https://www.ziprecruiter.com/k/tl/AAJtL4xHRMa-ahTkzY3Y0ygm7U-8cMhkYuexAv0lkU0tE8s2f_S1dIfQBITbb54Rbk8Qn1PephZtN5A7W23FqX5u4USfnbt5NtMgvMfHEieazdGiWKJYXkD0lc55SMiJWs-WjBJBC-TRoT3dEzMBpBhGFOwEtFSXu4-xBh3VomBkHUYGvLhDmStgv57sSKcYahn8kwkM2fIRMs2mbg"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">... Blockchain/NFT
                                                                        projects, Play-To-Earn games, or managing crypto
                                                                        operations/investment such as ... technologies * MA/MS
                                                                        degree in Economics, Finance, or a related technical
                                                                        field We are open to ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                1 Feb
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiRGV2T3BzIGVuZ2luZWVyIiwiMyI6InN0YWtlZmlzaCIsIjQiOiJQYWxvIEFsdG8sIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.WIMFvjoNkN9esao0BzTU1-_85_q7p27EpQvENkixE4A" href="https://www.ziprecruiter.com/k/tl/AAKeicp5SScCrsHSvYxZuRbs9__DQADJW6T9dT1DN7b0MwgHQYGI9z6tDGem0jq8UhNN1azXtiE2n5RtLTn3WdMNDm1mvtQRkkUkIsDpglyh6Xp9kCsBsvfwi178yiX390TN-Wu3IszXT8zoUZ505-Z6cufiMhbJiYIk2mmOVdo5zkwSBTO3MG8MyaBZJ1b9gzFr1Kr6McYE-os8hQ"><strong>DevOps
                                                                        engineer</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />stakefish
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Palo
                                                                            Alto, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiRGV2T3BzIGVuZ2luZWVyIiwiMyI6InN0YWtlZmlzaCIsIjQiOiJQYWxvIEFsdG8sIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.WIMFvjoNkN9esao0BzTU1-_85_q7p27EpQvENkixE4A" href="https://www.ziprecruiter.com/k/tl/AAKeicp5SScCrsHSvYxZuRbs9__DQADJW6T9dT1DN7b0MwgHQYGI9z6tDGem0jq8UhNN1azXtiE2n5RtLTn3WdMNDm1mvtQRkkUkIsDpglyh6Xp9kCsBsvfwi178yiX390TN-Wu3IszXT8zoUZ505-Z6cufiMhbJiYIk2mmOVdo5zkwSBTO3MG8MyaBZJ1b9gzFr1Kr6McYE-os8hQ"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">You are experienced with
                                                                        Docker, Kubernetes, and other cloud deployment
                                                                        technologies * You have ... of blockchain networks! We
                                                                        practice the crypto team mentality by assembling a truly
                                                                        global and ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                22 Sep
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiV2ViMyAvIGZyb250LWVuZCBzb2Z0d2FyZSBlbmdpbmVlciIsIjMiOiJzdGFrZWZpc2giLCI0IjoiUGFsbyBBbHRvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.2QTSdkLKnJlmtClGmTOYX8_ru07KwCuOY-LBFbLEME0" href="https://www.ziprecruiter.com/k/tl/AAJ7hAR9ydep7_DXKW98cNihAfMNNB_tXFjxv4mIGppIH9_XLRgd7Di1Q4xH18lzmx1WUkBgf_fYyh3j-oDMnkqcFK0rHHobHQjo72fa1epyMsQrFghXqfQTBeDkEPk31S_feG3l-84ERE7zu9KnfqD9f-_dwJg0J1ITxRhMeje6b9zyFIYxNVwqDZMNbhEeQUzLPbEafe0mRsQid4Y"><strong>Web3
                                                                        / front-end software engineer</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />stakefish
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Palo
                                                                            Alto, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiV2ViMyAvIGZyb250LWVuZCBzb2Z0d2FyZSBlbmdpbmVlciIsIjMiOiJzdGFrZWZpc2giLCI0IjoiUGFsbyBBbHRvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.2QTSdkLKnJlmtClGmTOYX8_ru07KwCuOY-LBFbLEME0" href="https://www.ziprecruiter.com/k/tl/AAJ7hAR9ydep7_DXKW98cNihAfMNNB_tXFjxv4mIGppIH9_XLRgd7Di1Q4xH18lzmx1WUkBgf_fYyh3j-oDMnkqcFK0rHHobHQjo72fa1epyMsQrFghXqfQTBeDkEPk31S_feG3l-84ERE7zu9KnfqD9f-_dwJg0J1ITxRhMeje6b9zyFIYxNVwqDZMNbhEeQUzLPbEafe0mRsQid4Y"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">You are passionate about
                                                                        blockchain technology and a decentralized future * You
                                                                        are contributing to ... of blockchain networks! We
                                                                        practice the crypto team mentality by assembling a truly
                                                                        global and ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                16 Sep
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIFRlY2huaWNhbCBQcm9kdWN0IE1hbmFnZXIiLCIzIjoiS2F2YSBMYWJzIEluYyIsIjQiOiJTYW4gRnJhbmNpc2NvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.tPEiG-9cw6hNMvkeOZGXetoK5n-kYEyDPFNvjpRqAWY" href="https://www.ziprecruiter.com/ek/tl/AAKDg4gnRA4VyD0qSCWiIMqbO-77F03j6d617iwA8U_ku28goMQCA7k6tMeg6Ci0-Y0PjtZe_lvFO645iqLFGjT5Nf6Ly8m6UkiB2GOl4xr_pAud9e-PtN4hq2sW9fjWk7SeYte4EsM3qyOr1wVQge_AxQeTzv3EcxCThXSvYUw9j8vKwdL_D_O-gmVZjXHMS7aZGb_8w7jN6vs39z5psQ"><strong>Senior
                                                                        Technical Product Manager</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Kava Labs
                                                                            Inc
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                    </ul>
                                                                    <div className="jobList-description">We are a Layer 1 Blockchain
                                                                        company with a 100% distributed workforce with teams in
                                                                        the US, Asia ... While distributed, you will work
                                                                        alongside a team of world class crypto experts on an
                                                                        open-source ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                29 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIFRlY2huaWNhbCBBcnRpc3QiLCIzIjoiTGltaXQgQnJlYWsiLCI0IjoiTG9zIEFuZ2VsZXMsIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.4NGiKDVhQJBUqgCDUMo51vYv0gGLUHnXgdiZqwbU4DE" href="https://www.ziprecruiter.com/ek/tl/AAIohNnW14RTzUd6zGSMQLmDT9QEnXbEE-vkqlwXyDQZC0RIwsxDhkj1Os0gSttYm6EBMhLQb8QhlSA6ixTVy9X7Vrm1RA8rn4qykrF7ESel1MMk2wwunAX5cPU0Njp8dlUAvMYamRSkWFNypHa9wtwT4RJ1WOQ8YbYeZe5YHR6bweU3l-sypTizwnHVD9qzGM-3DJ0Us7hK93fTE_9qIQ"><strong>Senior
                                                                        Technical Artist</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Limit
                                                                            Break
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Los
                                                                            Angeles, CA, USA
                                                                        </li>
                                                                    </ul>
                                                                    <div className="jobList-description">We combine the power of
                                                                        technology, crypto currency, and creative vision to
                                                                        create experiences that ... for Blockchain in gaming.
                                                                        This is a unique opportunity for an intellectually
                                                                        curious and ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                12 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQ3VzdG9tZXIgU3VjY2VzcyBJbnRlcm5zaGlwIiwiMyI6IkNvaW5MZWRnZXIiLCI0IjoiQXVzdGluLCBUWCwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.B8zDLbRMNtOKyWtn8cyMUSHuW63qFmD8gYKPJ9BedgM" href="https://www.ziprecruiter.com/k/tl/AAKee4YJ2qEcgBLI5CIQHtK5Cn9Wlv3BY6ObvjSP9yVVK9GC7Wm3qa0SM9-MZRIOiJX5LHGypX2-jEOAxwg1vvIu8uFdOuHtloIbOZTNL7piLM2tTghK1_LitvuuyLLLy2cshbeZo0JNB_QT27V6jIgcmxEqawrThxXTey9GpRK7tuBtdD7B_77qbD89Oa4N07J0ihwasxRHE0DR9Lw"><strong>Customer
                                                                        Success Internship</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />CoinLedger
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Austin,
                                                                            TX, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQ3VzdG9tZXIgU3VjY2VzcyBJbnRlcm5zaGlwIiwiMyI6IkNvaW5MZWRnZXIiLCI0IjoiQXVzdGluLCBUWCwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.B8zDLbRMNtOKyWtn8cyMUSHuW63qFmD8gYKPJ9BedgM" href="https://www.ziprecruiter.com/k/tl/AAKee4YJ2qEcgBLI5CIQHtK5Cn9Wlv3BY6ObvjSP9yVVK9GC7Wm3qa0SM9-MZRIOiJX5LHGypX2-jEOAxwg1vvIu8uFdOuHtloIbOZTNL7piLM2tTghK1_LitvuuyLLLy2cshbeZo0JNB_QT27V6jIgcmxEqawrThxXTey9GpRK7tuBtdD7B_77qbD89Oa4N07J0ihwasxRHE0DR9Lw"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">College students as well as
                                                                        young, non-student professionals in the tech/crypto
                                                                        space are ... Interest and knowledge in
                                                                        cryptocurrency/blockchain is required * Highly
                                                                        responsive to customer ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                1 Jun
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiTWlkZGxlIE9mZmljZSBBbmFseXN0IC0gVmVudHVyZSIsIjMiOiJXYXZlIERpZ2l0YWwgQXNzZXRzIiwiNCI6IkxvcyBBbmdlbGVzLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.roGhc4fTdncUuUPSnQMcAovQYw9DJIaE9EOVbfTOIKU" href="https://www.ziprecruiter.com/ek/tl/AAL7UAHb7PgDS4gf8cMzhmLnxFElLuGpQOBsO8w8YfXS20MrFd0MCV14UJVWqZ_Y1uBsiD0_5TuOnA6NqqsfxMwTz2Qg3qscrJapvN2BALwBZlpQzvOTJsyzCI0_PMa3lrnVVPZvpk7l2jSpC7f9GT6sjxsyGC5W0pUIB7HJgkaiQgewG9na-MEPH3YWsPZDSYfD-Ueol6G_T4bWjZj3Pg"><strong>Middle
                                                                        Office Analyst - Venture</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Wave
                                                                            Digital Assets
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Los
                                                                            Angeles, CA, USA
                                                                        </li>
                                                                    </ul>
                                                                    <div className="jobList-description">Wave Digital Assets is a
                                                                        leader in the rapidly growing and exciting blockchain
                                                                        and crypto space ... technology. * High levels of energy
                                                                        and integrity, with a proven track record of taking
                                                                        ownership ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                21 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIEh1bWFuIFJlc291cmNlcyBNYW5hZ2VyIiwiMyI6Ik9LWCBWZW50dXJlcyIsIjQiOiJTYW4gSm9zZSwgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.lCZBc41T4kq8KrU9nZEn4_IDwpj30csk3MFfWWnlhU4" href="https://www.ziprecruiter.com/ek/tl/AAJH43oxkc7svqICOwUnOxS6neRGtjhAmNhBck9juNcbgzJQkBaSJXPoZmIrIV4FoeFlMsQZBj9evlEZ5VUvZgcPIDZZOu87GfiXOPLdvWi2jbinNijx1-9LeeFckvDVqSGyrxno5SLPoHdOaUUN3KkOV4AqLza_bPze-Fvwb3CjZNIaaNjarj_RjS3HRlMCVTB8HhTh_CCtSpmFyf1YHA"><strong>Senior
                                                                        Human Resources Manager</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />OKX
                                                                            Ventures
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Jose, CA, USA
                                                                        </li>
                                                                    </ul>
                                                                    <div className="jobList-description">OKX innovatively adopted
                                                                        blockchain technology to reshape the financial ecosystem
                                                                        by offering some ... With its extensive range of crypto
                                                                        products and services, and unwavering commitment to
                                                                        innovation ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                7 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyIiwiMyI6IkxpbmsgTmV0d29yayIsIjQiOiJTYW4gRnJhbmNpc2NvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.3ynZ2O4rnwTm_GQXLFx-78DgMBEH4BHbkq5UR9WUAp0" href="https://www.ziprecruiter.com/k/tl/AALFa5e42CKP52ifgDepntvGa6bMTXmBk94clI0RaDPIb6QOqIPRtB4cWrlbpbgXxJ9sYIsNyLV-xc-h9w1dFWuag6Yz5baYkAi8jYseYmsbdFeUCq7FkWbvy6Rx3YhjHjIY8u-xy-GjcJpyrn0u5i4x4u412TtSaOchVLNNqSWZb4cPvh7HGO1InSVdJWb4N7Cs9qec6LLuZVKj4CQ"><strong>Senior
                                                                        Software Engineer</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Link
                                                                            Network
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIFNvZnR3YXJlIEVuZ2luZWVyIiwiMyI6IkxpbmsgTmV0d29yayIsIjQiOiJTYW4gRnJhbmNpc2NvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.3ynZ2O4rnwTm_GQXLFx-78DgMBEH4BHbkq5UR9WUAp0" href="https://www.ziprecruiter.com/k/tl/AALFa5e42CKP52ifgDepntvGa6bMTXmBk94clI0RaDPIb6QOqIPRtB4cWrlbpbgXxJ9sYIsNyLV-xc-h9w1dFWuag6Yz5baYkAi8jYseYmsbdFeUCq7FkWbvy6Rx3YhjHjIY8u-xy-GjcJpyrn0u5i4x4u412TtSaOchVLNNqSWZb4cPvh7HGO1InSVdJWb4N7Cs9qec6LLuZVKj4CQ"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">Eager to learn and
                                                                        experiment with new technologies, staying up-to-date
                                                                        with emerging trends in blockchain/web3 technology,
                                                                        including crypto wallets, smart contracts, and web3
                                                                        infrastructure</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                26 Jul
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiRGV2ZWxvcGVyIEFkdm9jYXRlIiwiMyI6IlpldHRhQmxvY2siLCI0IjoiU2FuIE1hdGVvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.T7xMpT85S20NPOQY2SmchjOJezQ_pQNUU7ItGERnPpc" href="https://www.ziprecruiter.com/k/tl/AALXFj3rGh7vtPkwk715lVlHz9bviFmmoQ2kl4Icp6aFY_MTEaq9NOlw-8otJ3NgYvCeRKoKzqKRVyCOjD6UdQB0_dodTFkA8BihaA1J8tnxPC1cLiDQNNl4DnTtTjmQVWfOnZoJX_YgD6jA95CW9LnPhrGXPlwsGw6v-is9-BrEpUmJG1khQWWV1YsK9doWkFJmstwhUXF-WnEIY2I"><strong>Developer
                                                                        Advocate</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />ZettaBlock
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Mateo, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiRGV2ZWxvcGVyIEFkdm9jYXRlIiwiMyI6IlpldHRhQmxvY2siLCI0IjoiU2FuIE1hdGVvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.T7xMpT85S20NPOQY2SmchjOJezQ_pQNUU7ItGERnPpc" href="https://www.ziprecruiter.com/k/tl/AALXFj3rGh7vtPkwk715lVlHz9bviFmmoQ2kl4Icp6aFY_MTEaq9NOlw-8otJ3NgYvCeRKoKzqKRVyCOjD6UdQB0_dodTFkA8BihaA1J8tnxPC1cLiDQNNl4DnTtTjmQVWfOnZoJX_YgD6jA95CW9LnPhrGXPlwsGw6v-is9-BrEpUmJG1khQWWV1YsK9doWkFJmstwhUXF-WnEIY2I"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">An innate drive to innovate
                                                                        and elucidate complex tech concepts, supported by a
                                                                        robust portfolio. * High-level familiarity with
                                                                        Crypto-Industry, including Blockchain, Web3,
                                                                        Cryptocurrency, DeFi ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                21 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiUGxhdGZvcm0gTWFuYWdlciIsIjMiOiJGcmFtZXdvcmsgVmVudHVyZXMiLCI0IjoiU2FuIEZyYW5jaXNjbywgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.SmeNaZZyfL7Mn-Yk1KOv7lpdjHLnsvpngank-Kh5AOE" href="https://www.ziprecruiter.com/ek/tl/AAJYH5UqcLuXdf3SYTeOQxGCy2EjNzSDqW8j3i_KpPn3duNNmnXhcolhyAuI3n644K0pYcuX4ff-WD08l4DzvHwfsUguhTxSkIcYgvg18mMO-ldmStd0L7pSU883DU6hn_TMSS8Z2T1CyNDi1WjDiWSSZvJ2ydXyWxhPpelzUF4uan-Z4eFkHCA5JRiV7GELkPOMSsLs8MHA1jNtEnL3vw"><strong>Platform
                                                                        Manager</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Framework
                                                                            Ventures
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                    </ul>
                                                                    <div className="jobList-description">Description Blockchain
                                                                        technology represents a new paradigm for how digital
                                                                        products and ... Understanding of markets,
                                                                        crypto/on-chain participation is a strong plus *
                                                                        Self-starter with the ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                29 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyIiwiMyI6IkVueWEgTGFicyIsIjQiOiJQYWxvIEFsdG8sIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.68TbxvbqoEusHCpBl-LaTkKXo2sAzbH8jBct_lL_sEA" href="https://www.ziprecruiter.com/k/tl/AAJWy6CJNVyCE3JZgvHWFEpCKX053_8sefpsFfbuzoZDJl2-fW2jHd3QcBgoKWXM7FCH9Ayh9hbOgCyWfHvYHxemTW5dY7tCVTjFG8GLd5DndXPZHYpXA3t6RUtnXZB9Qy75hoUHhZHWy6n9hoB4A_rTp3gOn8cOzPl2FmvDnF004J0D8FuvnVNIW2VXL45lGX9uUtV8l8jZiIGhRr8"><strong>Senior
                                                                        Full Stack Developer</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Enya Labs
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Palo
                                                                            Alto, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyIiwiMyI6IkVueWEgTGFicyIsIjQiOiJQYWxvIEFsdG8sIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.68TbxvbqoEusHCpBl-LaTkKXo2sAzbH8jBct_lL_sEA" href="https://www.ziprecruiter.com/k/tl/AAJWy6CJNVyCE3JZgvHWFEpCKX053_8sefpsFfbuzoZDJl2-fW2jHd3QcBgoKWXM7FCH9Ayh9hbOgCyWfHvYHxemTW5dY7tCVTjFG8GLd5DndXPZHYpXA3t6RUtnXZB9Qy75hoUHhZHWy6n9hoB4A_rTp3gOn8cOzPl2FmvDnF004J0D8FuvnVNIW2VXL45lGX9uUtV8l8jZiIGhRr8"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">... and crypto consumers,
                                                                        and can translate their needs into exceptional product
                                                                        designs and systems ... Boba's Hybrid Compute technology
                                                                        enables developers across the blockchain ecosystem to
                                                                        build dApps ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                17 Jul
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiMF9JVF9Tb2Z0d2FyZSBFbmdpbmVlciAtIEZ1bGwgU3RhY2siLCIzIjoiU3VtbWl0SFIiLCI0IjoiTG9zIEFuZ2VsZXMsIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.hRv6bfQqu2zDBJ27kEvY2wBJNwwXSyxRqDdjOk6EMxo" href="https://www.ziprecruiter.com/k/tl/AAIgsrIGIKaZJ9MnxcxoZ8clcMsCttCO5bXNb-YwdmrWxSusn6vk7uA1iuM9bpwamELDXC9bH9RgqT2a8NpVgYp6F2XpP_FYKC4ZaS25qPApa40lh6fJ7XfoE3sOnO-KsbUOg2H6Xc90NRqVWs_xHXexgoHbMp6SL2GYdizZ4GTwkY0FxGai7g5YuYE53B0KrJpYjm46qNwJ4vJU7xc"><strong>0_IT_Software
                                                                        Engineer - Full Stack</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />SummitHR
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Los
                                                                            Angeles, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiMF9JVF9Tb2Z0d2FyZSBFbmdpbmVlciAtIEZ1bGwgU3RhY2siLCIzIjoiU3VtbWl0SFIiLCI0IjoiTG9zIEFuZ2VsZXMsIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.hRv6bfQqu2zDBJ27kEvY2wBJNwwXSyxRqDdjOk6EMxo" href="https://www.ziprecruiter.com/k/tl/AAIgsrIGIKaZJ9MnxcxoZ8clcMsCttCO5bXNb-YwdmrWxSusn6vk7uA1iuM9bpwamELDXC9bH9RgqT2a8NpVgYp6F2XpP_FYKC4ZaS25qPApa40lh6fJ7XfoE3sOnO-KsbUOg2H6Xc90NRqVWs_xHXexgoHbMp6SL2GYdizZ4GTwkY0FxGai7g5YuYE53B0KrJpYjm46qNwJ4vJU7xc"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">Interest crypto and
                                                                        blockchain a plus. * Able to write high-quality,
                                                                        well-tested, functional, observable code that runs
                                                                        smoothly in production. * Experienced in shipping
                                                                        high-quality, complex apps to ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                13 Feb
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiVUkgVVggRGVzaWduZXIiLCIzIjoiUG93ZXIgTWV0YSBDb3JwIiwiNCI6IklydmluZSwgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.TjVtfKvkpWHA5kzRgSjF23VRqpiTYgjc7-vKfuSZt50" href="https://www.ziprecruiter.com/k/tl/AAJG7yR4JnKWR8g1ZBPusn4qPZVdX-WMZtw_X092Ph6AeXYCUEKseSUOo5Dq-fhN0W72Vm0IZiuGBOzLA30h9Vt68cmJ1q3424j8NfMNWC74nksqKLOyaQEedlH_MXYnBfayVof4nFPZd6xxMdNVlt6dVGJteLRAbeuMVwSyJPba8heHRIYMiE17cuTQUbVjO6HWGT21ntaVoIKI3T4"><strong>UI
                                                                        UX Designer</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Power Meta
                                                                            Corp
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Irvine,
                                                                            CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiVUkgVVggRGVzaWduZXIiLCIzIjoiUG93ZXIgTWV0YSBDb3JwIiwiNCI6IklydmluZSwgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.TjVtfKvkpWHA5kzRgSjF23VRqpiTYgjc7-vKfuSZt50" href="https://www.ziprecruiter.com/k/tl/AAJG7yR4JnKWR8g1ZBPusn4qPZVdX-WMZtw_X092Ph6AeXYCUEKseSUOo5Dq-fhN0W72Vm0IZiuGBOzLA30h9Vt68cmJ1q3424j8NfMNWC74nksqKLOyaQEedlH_MXYnBfayVof4nFPZd6xxMdNVlt6dVGJteLRAbeuMVwSyJPba8heHRIYMiE17cuTQUbVjO6HWGT21ntaVoIKI3T4"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">Speaks crypto language and
                                                                        is passionate about Web 3.0 and everything related * 1-2
                                                                        years of UX/UI, ... blockchain storage &amp; data
                                                                        disaster recovery!</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                22 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2l0ZSBNYW5hZ2VyIiwiMyI6IkZvdW5kcnkiLCI0IjoiTWluZGVuLCBORSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.vgv5rJyQHZsduHQAcusg_DsRcgO6GRENiFt_NDuTczU" href="https://www.ziprecruiter.com/k/tl/AALF1WKNGlCog0w-FUByBAQ7_H2hBdrG6R3J5Jc4NXiRyJXw6vuQvDy4w6dH7RCPCW66TKvsj2yR-cEZBjLfnjQ24jzzWlO3xXonqFl_PWa6n3AzsCEAervc-HeL_Ol7fzq0j6ffv146sfByarWxeI8Z82L7tCYa6ptlEMqQGD6WHaSXg4S2d_akZ9D5BtJKmp0sqL_bph_TVVw6i0Y"><strong>Site
                                                                        Manager</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Foundry
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Minden,
                                                                            NE, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2l0ZSBNYW5hZ2VyIiwiMyI6IkZvdW5kcnkiLCI0IjoiTWluZGVuLCBORSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.vgv5rJyQHZsduHQAcusg_DsRcgO6GRENiFt_NDuTczU" href="https://www.ziprecruiter.com/k/tl/AALF1WKNGlCog0w-FUByBAQ7_H2hBdrG6R3J5Jc4NXiRyJXw6vuQvDy4w6dH7RCPCW66TKvsj2yR-cEZBjLfnjQ24jzzWlO3xXonqFl_PWa6n3AzsCEAervc-HeL_Ol7fzq0j6ffv146sfByarWxeI8Z82L7tCYa6ptlEMqQGD6WHaSXg4S2d_akZ9D5BtJKmp0sqL_bph_TVVw6i0Y"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">If you thrive on
                                                                        innovation, are inspired by the potential of blockchain
                                                                        technology and are ... crypto space. At Foundry, we are
                                                                        working toward a common goal of empowering a
                                                                        decentralized ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                19 Apr
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIEJhY2tlbmQgRW5naW5lZXIiLCIzIjoiTW9iaWxlQ29pbiIsIjQiOiJTYW4gRnJhbmNpc2NvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.Rajrk34fmuS2PrF8sHIb1OeSCluXHDTDxSCZyyM5L6o" href="https://www.ziprecruiter.com/k/tl/AAIsn4Lnrj1D6hGi1471c52S8b6PvqdAgm0YWysvPGKjF_WfrN3vyJbXXvWB2Sx1KgxUT-v2nwlQNkvJVJ5NDy6eTYqdnX6wPJYTaZlNW2Uylze4tGJAnhVygFOORChJE1LwJGmIfoNQmb4PKhyh0sUROeK0XclrZlSCQLLYbldJWTwl8SgEqiBViDUPllHAR-Vqmh375ngTzfoQtWM"><strong>Senior
                                                                        Backend Engineer</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />MobileCoin
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIEJhY2tlbmQgRW5naW5lZXIiLCIzIjoiTW9iaWxlQ29pbiIsIjQiOiJTYW4gRnJhbmNpc2NvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.Rajrk34fmuS2PrF8sHIb1OeSCluXHDTDxSCZyyM5L6o" href="https://www.ziprecruiter.com/k/tl/AAIsn4Lnrj1D6hGi1471c52S8b6PvqdAgm0YWysvPGKjF_WfrN3vyJbXXvWB2Sx1KgxUT-v2nwlQNkvJVJ5NDy6eTYqdnX6wPJYTaZlNW2Uylze4tGJAnhVygFOORChJE1LwJGmIfoNQmb4PKhyh0sUROeK0XclrZlSCQLLYbldJWTwl8SgEqiBViDUPllHAR-Vqmh375ngTzfoQtWM"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">Though based on a
                                                                        cryptocurrency, the barrier to understanding, buying,
                                                                        and using crypto is huge ... Through our encrypted
                                                                        blockchain payment system, MobileCoin gives you the
                                                                        ability to transact in ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                23 Feb
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQnVzaW5lc3MgRGV2ZWxvcG1lbnQgUmVwcmVzZW50YXRpdmUiLCIzIjoiQ29pbkZ1bmQgTExDIiwiNCI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.86SG_Eqe3AH97MBI8_1S7I92f7Am9j5Mf3Z-62AKIYA" href="https://www.ziprecruiter.com/ek/tl/AAJZZt76G4f1CFQ6V3trrYjcLoJ647WMIvYS3kgdDZizzWsjEAYUpaYAdXZB1GUhMLTbBTejyFF4t8urAytdm1T28l-M8aGIoA5VPKtm6hUn6YSD-5MVdPRALDeND-q8GWnJG-YnnZ9ZdlQvLHLUxm2BRC5RqNgc1sjWXhLFcgHjo_bVY1ELKO0qZiP3abMw0aU6TIbhy1hCYmWk09z8fw"><strong>Business
                                                                        Development Representative</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />CoinFund
                                                                            LLC
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                    </ul>
                                                                    <div className="jobList-description">... crypto, NFTs,
                                                                        blockchain networks, and the metaverse. The ideal
                                                                        candidate is customer-centric ... Strong intellectual
                                                                        curiosity for blockchain technologies. * Embodying a
                                                                        Kaizen mindset that seeks ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                30 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiRmx1dHRlciBFbmdpbmVlciIsIjMiOiJNb2JpbGVDb2luIiwiNCI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ._BTz2cCW2rkF2pwxSGGw1JUzMcLmjzHMwsqlIjjWllY" href="https://www.ziprecruiter.com/k/tl/AAIZWU9XutC-j_XXu3W51gB5w2-_Boa0gBOOyZ7rBVFsCsYKiM_cuLMkm4RFeJqoTP07Btuc62YqxvuQThNuNXGI87Yo_A2BQDW9kDy7OJ5nXceQRZqjzxfXlF8hUhpoPE7ZOsjxoWd5H7gGAx50JzaVggditILTWC71eFTdZ8g1CxXcq3MUtRGClO5GVCh73kY3itjns3sIPoQUqX8"><strong>Flutter
                                                                        Engineer</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />MobileCoin
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiRmx1dHRlciBFbmdpbmVlciIsIjMiOiJNb2JpbGVDb2luIiwiNCI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ._BTz2cCW2rkF2pwxSGGw1JUzMcLmjzHMwsqlIjjWllY" href="https://www.ziprecruiter.com/k/tl/AAIZWU9XutC-j_XXu3W51gB5w2-_Boa0gBOOyZ7rBVFsCsYKiM_cuLMkm4RFeJqoTP07Btuc62YqxvuQThNuNXGI87Yo_A2BQDW9kDy7OJ5nXceQRZqjzxfXlF8hUhpoPE7ZOsjxoWd5H7gGAx50JzaVggditILTWC71eFTdZ8g1CxXcq3MUtRGClO5GVCh73kY3itjns3sIPoQUqX8"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">Though based on a
                                                                        cryptocurrency, the barrier to understanding, buying,
                                                                        and using crypto is huge ... Through our encrypted
                                                                        blockchain payment system, MobileCoin gives you the
                                                                        ability to transact in ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                20 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIERldlJlbCBFbmdpbmVlciIsIjMiOiJBcmd1cyBMYWJzIiwiNCI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.HeXHFYhYtIr8BVCcOdahPe8zHGHgSNeK7_gDwFkOxig" href="https://www.ziprecruiter.com/k/tl/AALmkFBEC_Q9jemr1iTP6E7Ed8drpPwn3IQPwdS30Gmtc24DjgHQjwgPzB40qEonXXmFEHfiIhvtOfs8zYwvotY-dY8AorTzXNIir7HGHXEtPE_6npwzVsb9L37QOydrZYwuLQ1KlEernU8RHcSa4_mGKJ_c98A7WY2GG1R477f5oBLjzBgoYDHyQ49RWLFlpQ6GqTXdmylKR86xJ4o"><strong>Senior
                                                                        DevRel Engineer</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Argus Labs
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIERldlJlbCBFbmdpbmVlciIsIjMiOiJBcmd1cyBMYWJzIiwiNCI6IlNhbiBGcmFuY2lzY28sIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.HeXHFYhYtIr8BVCcOdahPe8zHGHgSNeK7_gDwFkOxig" href="https://www.ziprecruiter.com/k/tl/AALmkFBEC_Q9jemr1iTP6E7Ed8drpPwn3IQPwdS30Gmtc24DjgHQjwgPzB40qEonXXmFEHfiIhvtOfs8zYwvotY-dY8AorTzXNIir7HGHXEtPE_6npwzVsb9L37QOydrZYwuLQ1KlEernU8RHcSa4_mGKJ_c98A7WY2GG1R477f5oBLjzBgoYDHyQ49RWLFlpQ6GqTXdmylKR86xJ4o"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">... crypto fund founded by
                                                                        ex-a16z GP Katie Haun) with participation from angels in
                                                                        tech and gaming ... Familiarity with blockchain and/or
                                                                        video game technology and the developer communities
                                                                        around them</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                16 Jun
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiRXhlY3V0aXZlIEFzc2lzdGFudCB0byB0aGUgQ0VPIiwiMyI6IkdvcmlsbGEgTGFicyIsIjQiOiJBZ291cmEgSGlsbHMsIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.Z9ZrUH0rO-G955DMq7OWRzZlUsjXqd2ysH63pUt9Ld0" href="https://www.ziprecruiter.com/k/tl/AALZpTRShC__KZxDLGga4uETN6UjUQ6W4oxJ-4Azj1k7qf1Vtm4Tv0k8Hj6R8Ct0pfwRg4SXi4hvDugOIQHwl0m3tTs2CRrozI3-sVJxCuGGNCsE0H8IZczU-loBuOGuSnfiNQde7tzg7kF3gASaYxh-wxLeprY27UTi9mpzMYEujeCmWz527LjXZ21dElYD2PGVLMH7gnVA5JxVqi0"><strong>Executive
                                                                        Assistant to the CEO</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Gorilla
                                                                            Labs
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Agoura
                                                                            Hills, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiRXhlY3V0aXZlIEFzc2lzdGFudCB0byB0aGUgQ0VPIiwiMyI6IkdvcmlsbGEgTGFicyIsIjQiOiJBZ291cmEgSGlsbHMsIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.Z9ZrUH0rO-G955DMq7OWRzZlUsjXqd2ysH63pUt9Ld0" href="https://www.ziprecruiter.com/k/tl/AALZpTRShC__KZxDLGga4uETN6UjUQ6W4oxJ-4Azj1k7qf1Vtm4Tv0k8Hj6R8Ct0pfwRg4SXi4hvDugOIQHwl0m3tTs2CRrozI3-sVJxCuGGNCsE0H8IZczU-loBuOGuSnfiNQde7tzg7kF3gASaYxh-wxLeprY27UTi9mpzMYEujeCmWz527LjXZ21dElYD2PGVLMH7gnVA5JxVqi0"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">Fintech, technology,
                                                                        Blockchain, AI, Crypto, merchant payment, marketing,
                                                                        sales, legal, finance, investor relations, investment
                                                                        banking, private equity, V.C., media Company Description
                                                                        Introducing a ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                19 Apr
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiRm91bmRpbmcgU29sdXRpb25zIEVuZ2luZWVyIiwiMyI6IlpldHRhQmxvY2siLCI0IjoiU2FuIEZyYW5jaXNjbywgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.xF1mj2Fnk4lno5VXcZMeWGVzrihIeET2puCMfU3OhH8" href="https://www.ziprecruiter.com/k/tl/AALJZ26xxw9Zrh6tpfLUZadpuWNfuzq_0tCgfmJoDElWOjb9d4Yd3fdO_QJj32ZxTs9-kHdux9lA-9g1HpLC8Hm86xtrNpM1rd51j-ExmVwEnvcJgJ8yGsL75x_DXj7pkMjJOnTOWWg4QHrQdGJuLY-0u3igJ_DveY9f9UvoXGRy75sE2u-C06uK3VTWRR0MYUShctUXroLyvGzS1-Q"><strong>Founding
                                                                        Solutions Engineer</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />ZettaBlock
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiRm91bmRpbmcgU29sdXRpb25zIEVuZ2luZWVyIiwiMyI6IlpldHRhQmxvY2siLCI0IjoiU2FuIEZyYW5jaXNjbywgQ0EsIFVTQSIsImlhdCI6MTY5MzU2OTA1NywiaXNzIjoiamJpbyJ9.xF1mj2Fnk4lno5VXcZMeWGVzrihIeET2puCMfU3OhH8" href="https://www.ziprecruiter.com/k/tl/AALJZ26xxw9Zrh6tpfLUZadpuWNfuzq_0tCgfmJoDElWOjb9d4Yd3fdO_QJj32ZxTs9-kHdux9lA-9g1HpLC8Hm86xtrNpM1rd51j-ExmVwEnvcJgJ8yGsL75x_DXj7pkMjJOnTOWWg4QHrQdGJuLY-0u3igJ_DveY9f9UvoXGRy75sE2u-C06uK3VTWRR0MYUShctUXroLyvGzS1-Q"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">Requirements * 5+ years of
                                                                        experience in B2B, SaaS tech, with a background in
                                                                        technical pre-sales ... High-level familiarity with
                                                                        Crypto-Industry, including Blockchain, Web3,
                                                                        Cryptocurrency, DeFi ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                21 Jul
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQnVzaW5lc3MgRGV2ZWxvcG1lbnQgQXNzb2NpYXRlIiwiMyI6IlBvd2VyIE1ldGEgQ29ycCIsIjQiOiJJcnZpbmUsIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.RNIrnh3khMFCbILkNUSzUNMa0kjcK_4E9308bkNyD2k" href="https://www.ziprecruiter.com/k/tl/AAIgtDiCYUux_O248JdyjU0LVXYfJeyk4WLCVkLWYWOs0xPJ92NvBBo3XJzCIn72FF_YHh-wXwpCBSBn4VBirum3mBK7fiptMqTXtMQ2bfk6VX7RG0okf67NJZ8ZvNu0hDTDE0T9ZlCx6D5oclLTUZZm5h9l4hPURREHebucbVzmnmmhQUEragiss-1pXxAiCg9tzVMEvdldWlC-RLU"><strong>Business
                                                                        Development Associate</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Power Meta
                                                                            Corp
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Irvine,
                                                                            CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQnVzaW5lc3MgRGV2ZWxvcG1lbnQgQXNzb2NpYXRlIiwiMyI6IlBvd2VyIE1ldGEgQ29ycCIsIjQiOiJJcnZpbmUsIENBLCBVU0EiLCJpYXQiOjE2OTM1NjkwNTcsImlzcyI6ImpiaW8ifQ.RNIrnh3khMFCbILkNUSzUNMa0kjcK_4E9308bkNyD2k" href="https://www.ziprecruiter.com/k/tl/AAIgtDiCYUux_O248JdyjU0LVXYfJeyk4WLCVkLWYWOs0xPJ92NvBBo3XJzCIn72FF_YHh-wXwpCBSBn4VBirum3mBK7fiptMqTXtMQ2bfk6VX7RG0okf67NJZ8ZvNu0hDTDE0T9ZlCx6D5oclLTUZZm5h9l4hPURREHebucbVzmnmmhQUEragiss-1pXxAiCg9tzVMEvdldWlC-RLU"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">... by decentralized
                                                                        blockchain technology. As a Business Development
                                                                        Associate, you will be ... A passion for web 3 and
                                                                        crypto and the ability to speak about the topic with
                                                                        enthusiasm * Ability ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                28 Apr
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQ0ZPIENvbnN1bHRhbnQiLCIzIjoiQnVya2xhbmQgQXNzb2NpYXRlcyIsIjQiOiJTYW4gRnJhbmNpc2NvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.LlsvxuChRr8F52zL1lSlzS3DQ-6ovV92nXilIBPJSUY" href="https://www.ziprecruiter.com/k/tl/AAJ6p9R-5sCO8jp5xOOkIJQw27x9_ukeEYbWfP0Y9dz0UI5cvZ6UuJenI00_AIw1iYo0X6NvmZwhRyAeWIxDausN2eoHsEdWSUyyEdx76wNV-SemZLDJoD_UnWKG_FYXoFmC9aVKhrJ8hi1aA-1XbDWADPVFr332Gg9NDOZijXxbPpJ-8giTi3yfPOaXgd5KZHNUZ4sRXJ_4mqxHiig"><strong>CFO
                                                                        Consultant</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Burkland
                                                                            Associates
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiQ0ZPIENvbnN1bHRhbnQiLCIzIjoiQnVya2xhbmQgQXNzb2NpYXRlcyIsIjQiOiJTYW4gRnJhbmNpc2NvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.LlsvxuChRr8F52zL1lSlzS3DQ-6ovV92nXilIBPJSUY" href="https://www.ziprecruiter.com/k/tl/AAJ6p9R-5sCO8jp5xOOkIJQw27x9_ukeEYbWfP0Y9dz0UI5cvZ6UuJenI00_AIw1iYo0X6NvmZwhRyAeWIxDausN2eoHsEdWSUyyEdx76wNV-SemZLDJoD_UnWKG_FYXoFmC9aVKhrJ8hi1aA-1XbDWADPVFr332Gg9NDOZijXxbPpJ-8giTi3yfPOaXgd5KZHNUZ4sRXJ_4mqxHiig"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">... Crypto/Blockchain/NFT,
                                                                        SaaS, Consumer, and Healthcare. * This role has variety
                                                                        at its core. From ... You know and love technology. You
                                                                        possess a strong working knowledge of a variety of
                                                                        systems ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                23 Mar
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiUHVibGljIFJlbGF0aW9ucyBBY2NvdW50IFN1cGVydmlzb3IgKFNlbmlvciBDb25zdWx0YW50KSIsIjMiOiJXYWNoc21hbiIsIjQiOiJXYXNoaW5ndG9uLCBEQywgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.imOXUA4EH-9ctQRDseDpPezfbK3kPg0IeJUtwP8Atgw" href="https://www.ziprecruiter.com/k/tl/AAKrjsIhxIaILT4xSivHnN6HD650TKm2UgJ14wic5767XMvQevCSYpHHmtafUiAtnCILvAgIGOlkXc2sRtGzix9EBQtExKSQyGBJCSYYSNypz25igkbfx94MQTbhCU1Njh9cscL1nok0-P0HFKo_RZZnsD6WzZwNa4bQizmKddXwJKczOMVzWYqFp6lq4kB9TsWFFmFVY8EEH1dZw14"><strong>Public
                                                                        Relations Account Supervisor (Senior
                                                                        Consultant)</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Wachsman
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Washington,
                                                                            DC, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiUHVibGljIFJlbGF0aW9ucyBBY2NvdW50IFN1cGVydmlzb3IgKFNlbmlvciBDb25zdWx0YW50KSIsIjMiOiJXYWNoc21hbiIsIjQiOiJXYXNoaW5ndG9uLCBEQywgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.imOXUA4EH-9ctQRDseDpPezfbK3kPg0IeJUtwP8Atgw" href="https://www.ziprecruiter.com/k/tl/AAKrjsIhxIaILT4xSivHnN6HD650TKm2UgJ14wic5767XMvQevCSYpHHmtafUiAtnCILvAgIGOlkXc2sRtGzix9EBQtExKSQyGBJCSYYSNypz25igkbfx94MQTbhCU1Njh9cscL1nok0-P0HFKo_RZZnsD6WzZwNa4bQizmKddXwJKczOMVzWYqFp6lq4kB9TsWFFmFVY8EEH1dZw14"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">... technologies, fintech
                                                                        and venture capital. With regional headquarters in New
                                                                        York, Dublin, and ... Experience working within the
                                                                        crypto/blockchain/Web3 industry is a plus! Powered by
                                                                        JazzHR ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                4 Aug
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2FsZXMgRW5naW5lZXIgKFJlbW90ZSwgUFNUKSIsIjMiOiJGb3J0YW5peCIsIjQiOiJTYW4gRnJhbmNpc2NvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.MarKAdzyl2iyG51xuEZ2rC1vjyJz5-pK62VbRuoY51o" href="https://www.ziprecruiter.com/k/tl/AAJSxJmfFqtX-Kal-amHfcugVSmbSEpi19QzrqTvEAT6Ri3XY32kkBjl7yHVrTX4wFxt6IMoQvRTS-9w79RTs6YhkDyg1yERHSmkuxj8n8QVFdVXKOoiQanbgL9EIoGgGBqf5_E9v1Wmb57uU-jgu7GVo6Ppc0AT5bL4PWGRyhEJldc8jJuddh7w3qDt7JL2VgTjf5SnvjfZXml2ECE"><strong>Sales
                                                                        Engineer (Remote, PST)</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Fortanix
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />San
                                                                            Francisco, CA, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2FsZXMgRW5naW5lZXIgKFJlbW90ZSwgUFNUKSIsIjMiOiJGb3J0YW5peCIsIjQiOiJTYW4gRnJhbmNpc2NvLCBDQSwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.MarKAdzyl2iyG51xuEZ2rC1vjyJz5-pK62VbRuoY51o" href="https://www.ziprecruiter.com/k/tl/AAJSxJmfFqtX-Kal-amHfcugVSmbSEpi19QzrqTvEAT6Ri3XY32kkBjl7yHVrTX4wFxt6IMoQvRTS-9w79RTs6YhkDyg1yERHSmkuxj8n8QVFdVXKOoiQanbgL9EIoGgGBqf5_E9v1Wmb57uU-jgu7GVo6Ppc0AT5bL4PWGRyhEJldc8jJuddh7w3qDt7JL2VgTjf5SnvjfZXml2ECE"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">Understanding of HSM and
                                                                        various crypto interfaces (PKCS#11, CAPI, CNG, JCE,
                                                                        etc.). Experience with ... Understanding of use cases of
                                                                        HSM and KMS (Database TDE, TLS termination, Blockchain,
                                                                        secure ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                14 Jun
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIFBIUCBMYXJhdmVsIFNvZnR3YXJlIERldmVsb3BlciAtIFRlYW0gTGVhZCIsIjMiOiJIRVJPSUMgQ3liZXJzZWN1cml0eSIsIjQiOiJMZWhpLCBVVCwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.EFrsgDkHHGmcEZCbExaF3ssPRyId_g8KtQdpOGJ6guw" href="https://www.ziprecruiter.com/k/tl/AALgjGv5VTKSxanwyy7P6dS4rbzEqs7c_Vssdbh8HNdgpfsMVT0Q4XwZc854KyTt9l6qzvqRpPkUY09nqq9o2sBJRwSGW_favBI3RYuXQfDfL9dbzXcHUatgL7gKeExxqdFMhHERdWASZQzJdF8Y7dU0sWp6-aUGVy6_Tea5tg8cfWA-6RgPgMoJAoCUluMpKE_0kj0vkAvDFtLL1bI"><strong>Senior
                                                                        PHP Laravel Software Developer - Team
                                                                        Lead</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />HEROIC
                                                                            Cybersecurity
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Lehi,
                                                                            UT, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU2VuaW9yIFBIUCBMYXJhdmVsIFNvZnR3YXJlIERldmVsb3BlciAtIFRlYW0gTGVhZCIsIjMiOiJIRVJPSUMgQ3liZXJzZWN1cml0eSIsIjQiOiJMZWhpLCBVVCwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.EFrsgDkHHGmcEZCbExaF3ssPRyId_g8KtQdpOGJ6guw" href="https://www.ziprecruiter.com/k/tl/AALgjGv5VTKSxanwyy7P6dS4rbzEqs7c_Vssdbh8HNdgpfsMVT0Q4XwZc854KyTt9l6qzvqRpPkUY09nqq9o2sBJRwSGW_favBI3RYuXQfDfL9dbzXcHUatgL7gKeExxqdFMhHERdWASZQzJdF8Y7dU0sWp6-aUGVy6_Tea5tg8cfWA-6RgPgMoJAoCUluMpKE_0kj0vkAvDFtLL1bI"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">Bachelor's degree in an
                                                                        engineering or technology related field or equivalent
                                                                        work experience * 5+ ... Blockchain, AI, Big Data,
                                                                        Artificial Intelligence, Spark, DynamoDB, Lambda,
                                                                        Angular, NodeJS, Crypto ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                23 Mar
                                                            </div>
                                                        </li>
                                                        <li className="job-listing">
                                                            <div className="jobList-introWrap">
                                                                <div className="jobList-intro">
                                                                    <a target="_blank" className="jobList-title u-textLarge zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU29mdHdhcmUgRW5naW5lZXIgaW4gVGVzdCIsIjMiOiJCbG9ja2NoYWlucyIsIjQiOiJSZW5vLCBOViwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.F7fvC_eqC8eXSa7crA56LlTmMENZZ0Xq9xho75gQ9nE" href="https://www.ziprecruiter.com/k/tl/AAJCz0USp2jRiq17mXoMXLDy3LSIh_J3OiC3ctYrOMYkZB9NB3lJukfeLdXqToobqn6np7__Z_rLWet-YQBcwmJXBLAxFQn5AZc9pleCI6VAPgFzvH-rpXS72uuHoj-FlvvxU1i_jSLjbb-eWnp0DlEGvG_s6VIK41DieqtTpde_ZjcWcltenuLzf478fWW1u7HLE0XTlMK2o_OSXoQ"><strong>Software
                                                                        Engineer in Test</strong></a>
                                                                    <ul className="jobList-introMeta">
                                                                        <li>
                                                                            <i className="text-muted fas fa-building" />Blockchains
                                                                        </li>
                                                                        <li>
                                                                            <i className="text-muted fas fa-map-marker-alt" />Reno,
                                                                            NV, USA
                                                                        </li>
                                                                        <li><a target="_blank" className="zip-apply zip-backfill-link" rel="noopener sponsored" data-track="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyI1Ijo2LCIwIjowLCIyIjoiU29mdHdhcmUgRW5naW5lZXIgaW4gVGVzdCIsIjMiOiJCbG9ja2NoYWlucyIsIjQiOiJSZW5vLCBOViwgVVNBIiwiaWF0IjoxNjkzNTY5MDU3LCJpc3MiOiJqYmlvIn0.F7fvC_eqC8eXSa7crA56LlTmMENZZ0Xq9xho75gQ9nE" href="https://www.ziprecruiter.com/k/tl/AAJCz0USp2jRiq17mXoMXLDy3LSIh_J3OiC3ctYrOMYkZB9NB3lJukfeLdXqToobqn6np7__Z_rLWet-YQBcwmJXBLAxFQn5AZc9pleCI6VAPgFzvH-rpXS72uuHoj-FlvvxU1i_jSLjbb-eWnp0DlEGvG_s6VIK41DieqtTpde_ZjcWcltenuLzf478fWW1u7HLE0XTlMK2o_OSXoQ"><span>Quick
                                                                            Apply</span></a></li>
                                                                    </ul>
                                                                    <div className="jobList-description">You will primarily support
                                                                        our Crypto Management development team testing DeFi
                                                                        features while ... You know blockchain technology (e.g.,
                                                                        transactions). You have good knowledge of QA methods,
                                                                        tools ...</div>
                                                                </div>
                                                            </div>
                                                            <div className="jobList-date text-muted u-textNoWrap">
                                                                16 Jun
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <a className="postCta-button btn btn-lg btn-block btn-primary u-mb--large" href="/products">Post
                                        a Job<br /><span className="postCta-sub">5 job posts, only $699</span></a>
                                    <div className="panel panel-default panel-expand" id="widget_43377">
                                        <div className="panel-body">
                                            <h3 className="u-mt--remove u-mb--regular">Welcome!</h3>
                                            <p>Welcome to the CoinMarketCap jobs board!</p>
                                            <p><br />This is the official job board of CoinMarketCap, leveraging an audience of
                                                over 5 million users each month to help you get your job vacancies filled.<br />
                                            </p>
                                            <p><strong>Save money with job packs.</strong></p>
                                            <p>Buy multiple listings at once and save money.</p>
                                            <ul>
                                                <li><strong><a href="https://jobs.coinmarketcap.com/post">Single Job</a>:
                                                    $150</strong></li>
                                                <li><strong><a href="https://jobs.coinmarketcap.com/payments/new/">5 Job
                                                    Pack</a>: $699</strong></li>
                                            </ul>
                                            <p>Job Packs never expire. Buy now and use them whenever you like.</p>
                                        </div>
                                    </div>
                                    <div id="job-alert-component">
                                        <div className="panel panel-default panel-expand" id="widget_43378">
                                            <div className="panel-body">
                                                <h3 className="u-mt--remove u-mb--regular">Sign up for Job Alerts</h3>
                                                <div className="alert-message" />
                                                <div id="job_alert_form_container">
                                                    <form id="new_job_alert" role="form" action="/job_alerts" acceptCharset="UTF-8" data-remote="true" method="post"><input type="hidden" name="authenticity_token" defaultValue="PjiQ4nMSOsqN6VhXmMuD3hEPHpUXWgLPMBPOE4Fx8QvlAl2vthFllKe5GnEfvE796qyVMsblks6T4OrH/cfeiQ==" autoComplete="off" />
                                                        <div className="unpao-klsxmtgdhzrqcv_1693569055">
                                                            <style media="screen" dangerouslySetInnerHTML={{ __html: "\n                                                        .unpao-klsxmtgdhzrqcv_1693569055 {\n                                                            position: absolute !important;\n                                                            top: -9999px;\n                                                            left: -9999px;\n                                                        }\n                                                    " }} /><label htmlFor="unpao-klsxmtgdhzrqcv">If you are a human, ignore
                                                                this field</label><input type="text" name="unpao-klsxmtgdhzrqcv" id="unpao-klsxmtgdhzrqcv" autoComplete="off" tabIndex={-1} />
                                                        </div>
                                                        <div className="form-fields">
                                                            <div className="form-group">
                                                                <input className="form-control" placeholder="Email Address" aria-label="Email Address" size={14} type="text" defaultValue name="job_alert[email]" id="job_alert_email" />
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <input type="text" name="q" id="job_alerts_keywords" className="form-control" aria-label="Keywords" placeholder="Keywords" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <div className="sidebar-location dropdown">
                                                                            <a href="#" className="hidden" data-toggle="dropdown" />
                                                                            <div className>
                                                                                <input type="text" name="l" id="l" className="form-control sidebar-location input-preserve location-input ui-autocomplete-input clearInput-input" placeholder="Location" aria-label="Location" autoComplete="off" data-location-autocomplete="true" data-location-geolocate="true" /><button className="clearInput-clear" aria-label="Clear" type="button" tabIndex={-1}><svg className="icon">
                                                                                    <use xlinkHref="#close" />
                                                                                </svg></button>
                                                                            </div>
                                                                            <input type="hidden" name="lat" id="job_alert_lat_sidebar-location" data-location-lat="true" autoComplete="off" />
                                                                            <input type="hidden" name="long" id="job_alert_long_sidebar-location" data-location-long="true" autoComplete="off" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <small>
                                                                <div className="consent_form text-xsmall">
                                                                    <input defaultValue={1473} autoComplete="off" type="hidden" name="job_alert[consents_attributes][0][agreement_id]" id="job_alert_consents_attributes_0_agreement_id" />
                                                                    <div className="checkbox">
                                                                        <label>
                                                                            <input name="job_alert[consents_attributes][0][consented]" type="hidden" defaultValue={0} autoComplete="off" /><input oninvalid="this.setCustomValidity('Please check this box if you want to proceed')" oninput="this.setCustomValidity('')" type="checkbox" defaultValue={1} name="job_alert[consents_attributes][0][consented]" id="job_alert_consents_attributes_0_consented" />
                                                                            I acknowledge that I have read and understand the <a target="_blank" href="/privacy">Privacy Policy
                                                                            </a>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </small>
                                                            <br />
                                                        </div>
                                                        <input defaultValue="sidebar" autoComplete="off" type="hidden" name="job_alert[source]" id="job_alert_source" />
                                                        <input autoComplete="off" type="hidden" name="job_alert[job_source]" id="job_alert_job_source" />
                                                        <input autoComplete="off" type="hidden" name="job_alert[job_feed]" id="job_alert_job_feed" />
                                                        <button type="submit" className="btn btn-success btn-block" id="button-job-alert" data-disable="true">
                                                            <i className="fas fa-envelope" aria-hidden="true" /> Create Alert
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ul id="ui-id-1" tabIndex={0} className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style={{ "display": "none" }} />
            <div role="status" aria-live="assertive" aria-relevant="additions" className="ui-helper-hidden-accessible" />
            <ul id="ui-id-2" tabIndex={0} className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front" style={{ "display": "none" }} />
            <div role="status" aria-live="assertive" aria-relevant="additions" className="ui-helper-hidden-accessible" />
            <footer className="footer">
                <div className="page-container">
                    <div>CoinMarketCap OpCo, LLC <p> 8 The Green Suite 6703<br />Dover, DE 19901 </p> jobs@coinmarketcap.com</div>
                    <div className="footerLinks">
                        <ul className="list-inline">
                            <li>
                                <a className="hidden-xs" href="https://jobs.coinmarketcap.com">All Jobs</a>
                            </li>
                            <li>
                                <a className="hidden-xs" href="https://jobs.coinmarketcap.com/products">Post a Job</a>
                            </li>
                            <li>
                                <a className="hidden-xs" href="https://jobs.coinmarketcap.com/employers">Employers</a>
                            </li>
                            <li>
                                <a className="hidden-xs" href="https://jobs.coinmarketcap.com/pages/22065-about">About</a>
                            </li>
                            <li>
                                <a className="hidden-xs" href="https://jobs.coinmarketcap.com/pages/22066-contact">Contact</a>
                            </li>
                            <li><a target="_blank" href="/privacy">Privacy Policy </a></li>
                        </ul>
                    </div>
                    <div id="teconsent" />
                </div>
            </footer>
            <div className="modal fade" id="loginEmployer" role="dialog" aria-labelledby="loginLabel" />
            <div className="modal fade" id="signupEmployer" role="dialog" aria-labelledby="signupEmployerLabel" />
            <div className="modal fade" id="loginProfile" role="dialog" aria-labelledby="loginLabel" />
            <div className="modal fade" id="signupProfile" role="dialog" aria-labelledby="signupProfileLabel" />
            <div id="consent_blackbar" />
            <div id="site_notification" />
            <iframe height={1} width={1} style={{ "position": "absolute", "top": "0px", "left": "0px", "border": "none", "visibility": "hidden" }} />
            <iframe scrolling="no" frameBorder={0} allowTransparency="true" src="https://platform.twitter.com/widgets/widget_iframe.2b2d73daf636805223fb11d48f3e94f7.html?origin=https%3A%2F%2Fjobs.coinmarketcap.com" title="Twitter settings iframe" style={{ "display": "none" }} /><iframe id="rufous-sandbox" scrolling="no" frameBorder={0} allowTransparency="true" allowFullScreen="true" style={{ "position": "absolute", "visibility": "hidden", "display": "none", "width": "0px", "height": "0px", "padding": "0px", "border": "none" }} title="Twitter analytics iframe" />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("app"));