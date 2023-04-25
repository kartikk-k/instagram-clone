interface Props {
    className?: string;
}

export const AppLogo = ({ className }: Props) => {
    return (
        <svg width="188" height="39" className={className} viewBox="0 0 188 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8203 2H11.8203C5.74518 2 0.820312 6.92487 0.820312 13V25C0.820312 31.0751 5.74518 36 11.8203 36H23.8203C29.8954 36 34.8203 31.0751 34.8203 25V13C34.8203 6.92487 29.8954 2 23.8203 2ZM4.82031 13C4.82031 9.13401 7.95432 6 11.8203 6H23.8203C27.6863 6 30.8203 9.13401 30.8203 13V25C30.8203 28.866 27.6863 32 23.8203 32H11.8203C7.95432 32 4.82031 28.866 4.82031 25V13ZM28.5349 10.2857C28.5349 11.6533 27.4263 12.7619 26.0587 12.7619C24.6911 12.7619 23.5825 11.6533 23.5825 10.2857C23.5825 8.91814 24.6911 7.80951 26.0587 7.80951C27.4263 7.80951 28.5349 8.91814 28.5349 10.2857ZM25.3919 18.9523C25.3919 23.1076 22.0233 26.4761 17.868 26.4761C13.7128 26.4761 10.3442 23.1076 10.3442 18.9523C10.3442 14.7971 13.7128 11.4285 17.868 11.4285C22.0233 11.4285 25.3919 14.7971 25.3919 18.9523ZM13.7995 18.9523C13.7995 21.1993 15.6211 23.0208 17.868 23.0208C20.115 23.0208 21.9366 21.1993 21.9366 18.9523C21.9366 16.7054 20.115 14.8838 17.868 14.8838C15.6211 14.8838 13.7995 16.7054 13.7995 18.9523Z" fill="url(#paint0_linear_53_26)" />
            <path d="M44.1406 30V29.2969L46.5469 29.1406V8.5625L44.1406 8.40625V7.70312H52.9531V8.40625L50.5469 8.5625V29.1406L52.9531 29.2969V30H44.1406ZM54.9688 14.9219L58.2344 14.5781L60.4375 14L60.7188 14.4531L60.6562 16.5625H60.7188C61.9583 14.75 63.5625 13.8438 65.5312 13.8438C65.9062 13.8438 66.2656 13.875 66.6094 13.9375C66.9531 14 67.3333 14.1406 67.75 14.3594C68.1667 14.5781 68.526 14.8646 68.8281 15.2188C69.1302 15.5729 69.3854 16.0781 69.5938 16.7344C69.8021 17.3906 69.9062 18.1562 69.9062 19.0312V29.2031L71.5 29.3594V30H64.4688V29.3594L66.0625 29.2031V18.5781C66.0625 16.3594 65.349 15.25 63.9219 15.25C62.9844 15.25 62.2135 15.6771 61.6094 16.5312C61.0156 17.3854 60.7188 18.5052 60.7188 19.8906V29.2031L62.3281 29.3594V30H55.2812V29.3594L56.8906 29.2031V15.5312L55 15.5625L54.9688 14.9219ZM78.8281 29.7031C80.0156 29.7031 80.8906 29.4844 81.4531 29.0469C82.026 28.6094 82.3125 28.0625 82.3125 27.4062C82.3125 27.0625 82.2552 26.7604 82.1406 26.5C82.0365 26.2292 81.8594 25.974 81.6094 25.7344C81.3698 25.4844 81.0469 25.2344 80.6406 24.9844C80.2448 24.724 79.75 24.4323 79.1562 24.1094C78.6354 23.8073 78.0833 23.4948 77.5 23.1719C76.9167 22.8385 76.375 22.4583 75.875 22.0312C75.3854 21.5938 74.974 21.0885 74.6406 20.5156C74.3177 19.9427 74.1562 19.2552 74.1562 18.4531C74.1562 17.7448 74.2917 17.1042 74.5625 16.5312C74.8333 15.9583 75.2083 15.474 75.6875 15.0781C76.1771 14.6719 76.7552 14.3594 77.4219 14.1406C78.099 13.9219 78.8385 13.8125 79.6406 13.8125C80.2448 13.8125 80.849 13.8906 81.4531 14.0469C82.0677 14.1927 82.6198 14.4167 83.1094 14.7188C83.599 15.0208 83.9948 15.3958 84.2969 15.8438C84.599 16.2917 84.75 16.8125 84.75 17.4062C84.75 17.6354 84.7083 17.8594 84.625 18.0781C84.5521 18.2969 84.4375 18.4948 84.2812 18.6719C84.125 18.849 83.9323 18.9948 83.7031 19.1094C83.4844 19.2135 83.2292 19.2656 82.9375 19.2656C82.3333 19.2656 81.8802 19.099 81.5781 18.7656C81.276 18.4323 81.125 18.026 81.125 17.5469C81.125 17.2448 81.1667 16.9896 81.25 16.7812C81.3333 16.5625 81.4427 16.3854 81.5781 16.25C81.724 16.1042 81.8854 16 82.0625 15.9375C82.25 15.8646 82.4375 15.8281 82.625 15.8281H82.7656V15.7969C82.6615 15.6302 82.5104 15.474 82.3125 15.3281C82.1146 15.1719 81.8802 15.0365 81.6094 14.9219C81.3385 14.7969 81.0365 14.6979 80.7031 14.625C80.3698 14.5521 80.0156 14.5156 79.6406 14.5156C79.0885 14.5156 78.6198 14.5885 78.2344 14.7344C77.849 14.8802 77.5312 15.0677 77.2812 15.2969C77.0417 15.5156 76.8646 15.7604 76.75 16.0312C76.6354 16.3021 76.5781 16.5625 76.5781 16.8125C76.5781 17.1146 76.625 17.375 76.7188 17.5938C76.8125 17.8125 76.974 18.0365 77.2031 18.2656C77.4427 18.4844 77.7656 18.724 78.1719 18.9844C78.5885 19.2448 79.1094 19.5573 79.7344 19.9219C80.3385 20.2344 80.974 20.5677 81.6406 20.9219C82.3177 21.276 82.9375 21.6875 83.5 22.1562C84.0625 22.6146 84.526 23.1458 84.8906 23.75C85.2656 24.3438 85.4531 25.0417 85.4531 25.8438C85.4531 26.5208 85.3229 27.1406 85.0625 27.7031C84.8125 28.2656 84.4167 28.75 83.875 29.1562C83.3438 29.5625 82.6615 29.875 81.8281 30.0938C81.0052 30.3229 80.026 30.4375 78.8906 30.4375C78.349 30.4375 77.7708 30.3698 77.1562 30.2344C76.5417 30.099 75.974 29.8854 75.4531 29.5938C74.9323 29.2917 74.5 28.9062 74.1562 28.4375C73.8125 27.9583 73.6406 27.375 73.6406 26.6875C73.6406 26.3958 73.6875 26.1146 73.7812 25.8438C73.875 25.5729 74.0052 25.3333 74.1719 25.125C74.349 24.9062 74.5625 24.7344 74.8125 24.6094C75.0625 24.4844 75.349 24.4219 75.6719 24.4219C75.9531 24.4219 76.2031 24.474 76.4219 24.5781C76.6406 24.6719 76.8229 24.8021 76.9688 24.9688C77.125 25.125 77.2448 25.3125 77.3281 25.5312C77.4115 25.75 77.4583 25.9844 77.4688 26.2344C77.4688 26.526 77.4167 26.7865 77.3125 27.0156C77.2083 27.2344 77.0729 27.4167 76.9062 27.5625C76.7396 27.7083 76.5469 27.8229 76.3281 27.9062C76.1198 27.9792 75.9115 28.0156 75.7031 28.0156C75.6615 28.0156 75.6146 28.0156 75.5625 28.0156C75.5208 28.0156 75.4792 28.0104 75.4375 28V28.0312C75.5312 28.2396 75.6719 28.4427 75.8594 28.6406C76.0469 28.8385 76.2812 29.0156 76.5625 29.1719C76.8542 29.3281 77.1875 29.4583 77.5625 29.5625C77.9479 29.6562 78.3698 29.7031 78.8281 29.7031ZM86.6094 14.9844V14.3125H89.2656V10.8594L90.6094 10.7188L92.8125 10.1406L93.1094 10.5938V14.3125H96.5312V14.9844L93.1094 15.125V26.125C93.1094 26.7604 93.1823 27.2917 93.3281 27.7188C93.4844 28.1354 93.6823 28.4219 93.9219 28.5781C94.1719 28.7344 94.3698 28.8333 94.5156 28.875C94.6719 28.9167 94.8333 28.9375 95 28.9375C95.3229 28.9375 95.6302 28.8698 95.9219 28.7344C96.224 28.5885 96.4948 28.3802 96.7344 28.1094C96.9844 27.8385 97.1875 27.5938 97.3438 27.375C97.5 27.1458 97.6771 26.8698 97.875 26.5469L98.5469 26.9531C97.9948 27.8698 97.5156 28.5365 97.1094 28.9531C96.1198 29.9635 94.9792 30.4688 93.6875 30.4688C93.1979 30.4688 92.7604 30.4323 92.375 30.3594C92 30.2969 91.6094 30.1562 91.2031 29.9375C90.7969 29.7188 90.4583 29.4271 90.1875 29.0625C89.9167 28.6875 89.6927 28.1771 89.5156 27.5312C89.349 26.875 89.2656 26.1094 89.2656 25.2344V15.125L86.6094 14.9844ZM99.4375 26.6094C99.4375 26.099 99.5156 25.6094 99.6719 25.1406C99.8385 24.6615 100.104 24.2031 100.469 23.7656C100.833 23.3281 101.281 22.9479 101.812 22.625C102.344 22.3021 103 22.0469 103.781 21.8594C104.573 21.6615 105.448 21.5625 106.406 21.5625C106.917 21.5625 107.401 21.5833 107.859 21.625V19.4688C107.859 18.7812 107.844 18.224 107.812 17.7969C107.792 17.3698 107.729 16.9323 107.625 16.4844C107.521 16.026 107.37 15.6771 107.172 15.4375C106.984 15.1875 106.714 14.9844 106.359 14.8281C106.016 14.6615 105.594 14.5781 105.094 14.5781C103.573 14.5781 102.464 15.1771 101.766 16.375V16.4375C101.943 16.4062 102.104 16.3906 102.25 16.3906C102.792 16.3906 103.219 16.5573 103.531 16.8906C103.844 17.224 104 17.7031 104 18.3281C104 18.8698 103.812 19.3281 103.438 19.7031C103.062 20.0677 102.594 20.25 102.031 20.25C101.417 20.25 100.932 20.0417 100.578 19.625C100.224 19.2083 100.047 18.7188 100.047 18.1562C100.047 16.9271 100.609 15.901 101.734 15.0781C102.87 14.2552 104.172 13.8438 105.641 13.8438C106.682 13.8438 107.568 13.9531 108.297 14.1719C109.036 14.3906 109.625 14.6823 110.062 15.0469C110.5 15.401 110.839 15.8906 111.078 16.5156C111.328 17.1302 111.49 17.7604 111.562 18.4062C111.646 19.0521 111.688 19.8438 111.688 20.7812V29.2031L113.297 29.3594V30H108.328L107.891 27.5312H107.859C107.349 28.5208 106.729 29.2604 106 29.75C105.281 30.2292 104.406 30.4688 103.375 30.4688C102.104 30.4688 101.13 30.0885 100.453 29.3281C99.776 28.5677 99.4375 27.6615 99.4375 26.6094ZM103.219 26.2812C103.219 27.1146 103.375 27.7917 103.688 28.3125C104 28.8229 104.458 29.0781 105.062 29.0781C105.771 29.0781 106.411 28.6354 106.984 27.75C107.568 26.8646 107.859 25.7812 107.859 24.5V22.3438C107.443 22.2917 107.104 22.2656 106.844 22.2656C106.302 22.2656 105.818 22.3385 105.391 22.4844C104.974 22.6302 104.641 22.8281 104.391 23.0781C104.141 23.3281 103.932 23.5938 103.766 23.875C103.599 24.1458 103.479 24.4479 103.406 24.7812C103.333 25.1146 103.281 25.3906 103.25 25.6094C103.229 25.8281 103.219 26.0521 103.219 26.2812ZM115.062 34C115.062 33.4271 115.193 32.9167 115.453 32.4688C115.724 32.0208 116.057 31.6771 116.453 31.4375C116.849 31.2083 117.224 31.0312 117.578 30.9062C117.943 30.7917 118.266 30.7344 118.547 30.7344V30.7031C116.609 30.1198 115.641 29.0729 115.641 27.5625C115.641 26.6562 115.964 25.875 116.609 25.2188C117.266 24.5625 117.969 24.125 118.719 23.9062V23.875C117.771 23.4375 117.052 22.8177 116.562 22.0156C116.073 21.2031 115.828 20.2969 115.828 19.2969C115.828 17.7448 116.448 16.4479 117.688 15.4062C118.938 14.3646 120.474 13.8438 122.297 13.8438C124.026 13.8438 125.464 14.2969 126.609 15.2031C127.453 13.6094 128.469 12.8125 129.656 12.8125C130.26 12.8125 130.729 12.9844 131.062 13.3281C131.406 13.6719 131.578 14.1094 131.578 14.6406C131.578 15.1094 131.438 15.5052 131.156 15.8281C130.885 16.1406 130.536 16.2969 130.109 16.2969C129.63 16.2969 129.24 16.1667 128.938 15.9062C128.646 15.6354 128.5 15.2656 128.5 14.7969C128.5 14.474 128.557 14.2188 128.672 14.0312V13.9688C128.401 14.0208 128.13 14.2135 127.859 14.5469C127.599 14.8698 127.375 15.2656 127.188 15.7344C128.135 16.7448 128.609 17.9219 128.609 19.2656C128.609 20.8281 128.01 22.1042 126.812 23.0938C125.615 24.0833 124.099 24.5781 122.266 24.5781C121.245 24.5781 120.328 24.4479 119.516 24.1875C118.891 24.4062 118.401 24.6823 118.047 25.0156C117.693 25.3385 117.516 25.6771 117.516 26.0312C117.516 26.9896 119.245 27.4688 122.703 27.4688C124.13 27.4688 125.297 27.5469 126.203 27.7031C127.109 27.849 127.854 28.1094 128.438 28.4844C129.021 28.849 129.427 29.3281 129.656 29.9219C129.896 30.5156 130.016 31.276 130.016 32.2031C130.016 32.7031 129.932 33.2031 129.766 33.7031C129.609 34.2031 129.339 34.6979 128.953 35.1875C128.578 35.6771 128.109 36.1094 127.547 36.4844C126.984 36.8594 126.266 37.1615 125.391 37.3906C124.526 37.6198 123.557 37.7344 122.484 37.7344C121.839 37.7344 121.208 37.7083 120.594 37.6562C119.99 37.6042 119.339 37.4948 118.641 37.3281C117.943 37.1615 117.339 36.9479 116.828 36.6875C116.328 36.4271 115.906 36.0625 115.562 35.5938C115.229 35.1354 115.062 34.6042 115.062 34ZM117.844 33.5156C117.844 34.1615 117.995 34.7135 118.297 35.1719C118.609 35.6406 119.026 35.9948 119.547 36.2344C120.078 36.474 120.63 36.6458 121.203 36.75C121.776 36.8646 122.396 36.9219 123.062 36.9219C124.667 36.9219 125.938 36.6094 126.875 35.9844C127.812 35.3594 128.281 34.5469 128.281 33.5469C128.281 32.901 128.099 32.3958 127.734 32.0312C127.37 31.6667 126.844 31.4219 126.156 31.2969C125.479 31.1823 124.792 31.1146 124.094 31.0938L121.594 31.0469C120.625 31.026 119.823 30.9635 119.188 30.8594L119.172 30.875C118.286 31.5104 117.844 32.3906 117.844 33.5156ZM119.672 19.2031C119.672 20.7135 119.885 21.8698 120.312 22.6719C120.75 23.474 121.391 23.875 122.234 23.875C123.922 23.875 124.766 22.349 124.766 19.2969C124.766 17.651 124.573 16.4479 124.188 15.6875C123.802 14.9271 123.172 14.5469 122.297 14.5469C121.453 14.5469 120.802 14.9531 120.344 15.7656C119.896 16.5781 119.672 17.724 119.672 19.2031ZM132.453 15.5625V14.9219L135.719 14.5781L137.922 14L138.141 14.4531V17.1406H138.203C138.411 16.724 138.667 16.3177 138.969 15.9219C139.271 15.526 139.599 15.1771 139.953 14.875C140.318 14.5625 140.703 14.3125 141.109 14.125C141.516 13.9375 141.927 13.8438 142.344 13.8438C143.156 13.8438 143.781 14.0625 144.219 14.5C144.667 14.9271 144.891 15.5 144.891 16.2188C144.891 16.5208 144.844 16.8021 144.75 17.0625C144.656 17.3125 144.521 17.5312 144.344 17.7188C144.177 17.9062 143.969 18.0573 143.719 18.1719C143.479 18.276 143.214 18.3281 142.922 18.3281C142.609 18.3281 142.328 18.276 142.078 18.1719C141.828 18.0677 141.615 17.9271 141.438 17.75C141.271 17.5729 141.141 17.3698 141.047 17.1406C140.953 16.901 140.906 16.6458 140.906 16.375C140.906 15.8229 141.021 15.4167 141.25 15.1562V15.0625C140.875 15.1458 140.505 15.3438 140.141 15.6562C139.786 15.9688 139.464 16.3958 139.172 16.9375C138.88 17.4688 138.646 18.1146 138.469 18.875C138.292 19.625 138.203 20.474 138.203 21.4219V29.2031L139.812 29.3594V30H132.766V29.3594L134.375 29.2031V15.5625H132.453ZM146.25 26.6094C146.25 26.099 146.328 25.6094 146.484 25.1406C146.651 24.6615 146.917 24.2031 147.281 23.7656C147.646 23.3281 148.094 22.9479 148.625 22.625C149.156 22.3021 149.812 22.0469 150.594 21.8594C151.385 21.6615 152.26 21.5625 153.219 21.5625C153.729 21.5625 154.214 21.5833 154.672 21.625V19.4688C154.672 18.7812 154.656 18.224 154.625 17.7969C154.604 17.3698 154.542 16.9323 154.438 16.4844C154.333 16.026 154.182 15.6771 153.984 15.4375C153.797 15.1875 153.526 14.9844 153.172 14.8281C152.828 14.6615 152.406 14.5781 151.906 14.5781C150.385 14.5781 149.276 15.1771 148.578 16.375V16.4375C148.755 16.4062 148.917 16.3906 149.062 16.3906C149.604 16.3906 150.031 16.5573 150.344 16.8906C150.656 17.224 150.812 17.7031 150.812 18.3281C150.812 18.8698 150.625 19.3281 150.25 19.7031C149.875 20.0677 149.406 20.25 148.844 20.25C148.229 20.25 147.745 20.0417 147.391 19.625C147.036 19.2083 146.859 18.7188 146.859 18.1562C146.859 16.9271 147.422 15.901 148.547 15.0781C149.682 14.2552 150.984 13.8438 152.453 13.8438C153.495 13.8438 154.38 13.9531 155.109 14.1719C155.849 14.3906 156.438 14.6823 156.875 15.0469C157.312 15.401 157.651 15.8906 157.891 16.5156C158.141 17.1302 158.302 17.7604 158.375 18.4062C158.458 19.0521 158.5 19.8438 158.5 20.7812V29.2031L160.109 29.3594V30H155.141L154.703 27.5312H154.672C154.161 28.5208 153.542 29.2604 152.812 29.75C152.094 30.2292 151.219 30.4688 150.188 30.4688C148.917 30.4688 147.943 30.0885 147.266 29.3281C146.589 28.5677 146.25 27.6615 146.25 26.6094ZM150.031 26.2812C150.031 27.1146 150.188 27.7917 150.5 28.3125C150.812 28.8229 151.271 29.0781 151.875 29.0781C152.583 29.0781 153.224 28.6354 153.797 27.75C154.38 26.8646 154.672 25.7812 154.672 24.5V22.3438C154.255 22.2917 153.917 22.2656 153.656 22.2656C153.115 22.2656 152.63 22.3385 152.203 22.4844C151.786 22.6302 151.453 22.8281 151.203 23.0781C150.953 23.3281 150.745 23.5938 150.578 23.875C150.411 24.1458 150.292 24.4479 150.219 24.7812C150.146 25.1146 150.094 25.3906 150.062 25.6094C150.042 25.8281 150.031 26.0521 150.031 26.2812ZM161.734 15.5625V14.9219L165 14.5781L167.203 14L167.422 14.4531V16.5625H167.484C168.724 14.75 170.219 13.8438 171.969 13.8438C172.333 13.8438 172.688 13.8854 173.031 13.9688C173.375 14.0417 173.734 14.1771 174.109 14.375C174.495 14.5625 174.844 14.8646 175.156 15.2812C175.469 15.6875 175.714 16.1823 175.891 16.7656H175.922C177.318 14.8177 178.943 13.8438 180.797 13.8438C181.161 13.8438 181.516 13.8802 181.859 13.9531C182.203 14.0156 182.573 14.1615 182.969 14.3906C183.375 14.6198 183.724 14.9167 184.016 15.2812C184.307 15.6458 184.552 16.1615 184.75 16.8281C184.948 17.4844 185.047 18.25 185.047 19.125V29.2031L186.656 29.3594V30H179.609V29.3594L181.203 29.2031V18.5781C181.203 17.9635 181.146 17.4375 181.031 17C180.927 16.5521 180.802 16.2188 180.656 16C180.521 15.7812 180.349 15.6146 180.141 15.5C179.932 15.375 179.766 15.3021 179.641 15.2812C179.516 15.2604 179.375 15.25 179.219 15.25C178.521 15.25 177.839 15.6354 177.172 16.4062C176.516 17.1771 176.188 18.2344 176.188 19.5781V29.2031L177.797 29.3594V30H170.75V29.3594L172.344 29.2031V18.5781C172.344 17.9635 172.292 17.4375 172.188 17C172.083 16.5521 171.958 16.2188 171.812 16C171.677 15.7812 171.505 15.6146 171.297 15.5C171.099 15.375 170.938 15.3021 170.812 15.2812C170.688 15.2604 170.547 15.25 170.391 15.25C169.724 15.25 169.073 15.6979 168.438 16.5938C167.802 17.4896 167.484 18.5885 167.484 19.8906V29.2031L169.094 29.3594V30H162.047V29.3594L163.656 29.2031V15.5625H161.734Z" fill="#2E353E" />
            <defs>
                <linearGradient id="paint0_linear_53_26" x1="32.4519" y1="3.63158" x2="2.97821" y2="34.3684" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF469F" />
                    <stop offset="0.592597" stopColor="#F91BFD" />
                    <stop offset="1" stopColor="#7737FE" />
                </linearGradient>
            </defs>
        </svg>

    )
}

interface IconProps {
    className?: string
}

export const HomeIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.005 16.545C9.005 15.7501 9.32075 14.9878 9.8828 14.4258C10.4448 13.8638 11.2071 13.548 12.002 13.548C12.3957 13.5479 12.7855 13.6253 13.1492 13.7758C13.5129 13.9264 13.8434 14.1471 14.1218 14.4254C14.4002 14.7038 14.6211 15.0342 14.7718 15.3979C14.9224 15.7615 15 16.1513 15 16.545V22H20C21.1046 22 22 21.1046 22 20V13.2549C22 12.1616 21.5525 11.1159 20.7615 10.3611L13.3808 3.31767C12.608 2.58018 11.392 2.58018 10.6192 3.31766L3.23847 10.3611C2.44752 11.1159 2 12.1616 2 13.2549V20C2 21.1046 2.89543 22 4 22H9.005V16.545Z" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    )
}
export const LogoutIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className ? className : "fill-black"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7C2 4.79086 3.79086 3 6 3H11C13.2091 3 15 4.79086 15 7V8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8V7C13 5.89543 12.1046 5 11 5H6C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H11C12.1046 19 13 18.1046 13 17V16C13 15.4477 13.4477 15 14 15C14.5523 15 15 15.4477 15 16V17C15 19.2091 13.2091 21 11 21H6C3.79086 21 2 19.2091 2 17V7Z" />
            <path d="M6 12C6 11.4477 6.44772 11 7 11H18.5858L17.2929 9.70711C16.9024 9.31658 16.9024 8.68342 17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289L21.6364 11.2222C21.6486 11.2344 21.6604 11.2467 21.6719 11.2593C21.8734 11.4423 22 11.7064 22 12C22 12.2936 21.8734 12.5577 21.6719 12.7407C21.6604 12.7533 21.6486 12.7656 21.6364 12.7778L18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071C16.9024 15.3166 16.9024 14.6834 17.2929 14.2929L18.5858 13H7C6.44772 13 6 12.5523 6 12Z" />
        </svg>
    )
}

export const ActiveHomeIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.005 16.545C9.005 15.7501 9.32075 14.9878 9.8828 14.4258C10.4448 13.8638 11.2071 13.548 12.002 13.548C12.3957 13.5479 12.7855 13.6253 13.1492 13.7758C13.5129 13.9264 13.8434 14.1471 14.1218 14.4254C14.4002 14.7038 14.6211 15.0342 14.7718 15.3979C14.9224 15.7615 15 16.1513 15 16.545V22H20C21.1046 22 22 21.1046 22 20V13.2549C22 12.1616 21.5525 11.1159 20.7615 10.3611L13.3808 3.31767C12.608 2.58018 11.392 2.58018 10.6192 3.31766L3.23847 10.3611C2.44752 11.1159 2 12.1616 2 13.2549V20C2 21.1046 2.89543 22 4 22H9.005V16.545Z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    )
}

export const ActiveSearchIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 10.5C17.5 11.8845 17.0895 13.2378 16.3203 14.389C15.5511 15.5401 14.4579 16.4373 13.1788 16.9672C11.8997 17.497 10.4922 17.6356 9.13437 17.3655C7.7765 17.0954 6.52922 16.4287 5.55026 15.4497C4.57129 14.4708 3.9046 13.2235 3.63451 11.8656C3.36441 10.5078 3.50303 9.1003 4.03285 7.82122C4.56266 6.54213 5.45987 5.44888 6.61101 4.67971C7.76216 3.91054 9.11553 3.5 10.5 3.5C12.3565 3.5 14.137 4.2375 15.4498 5.55025C16.7625 6.86301 17.5 8.64348 17.5 10.5Z" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.511 16.511L22 22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const SearchIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 10.5C19 12.1811 18.5015 13.8245 17.5675 15.2223C16.6335 16.6202 15.306 17.7096 13.7528 18.353C12.1996 18.9963 10.4906 19.1647 8.84174 18.8367C7.1929 18.5087 5.67834 17.6992 4.4896 16.5104C3.30085 15.3217 2.4913 13.8071 2.16333 12.1583C1.83535 10.5094 2.00368 8.80036 2.64703 7.24719C3.29037 5.69402 4.37984 4.3665 5.77766 3.43251C7.17547 2.49852 8.81886 2 10.5 2C12.7543 2 14.9164 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.511 16.511L22 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}
export const AvtiveExploreIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.001 22.505C17.8 22.505 22.501 17.804 22.501 12.005C22.501 6.20602 17.8 1.505 12.001 1.505C6.20199 1.505 1.50098 6.20602 1.50098 12.005C1.50098 17.804 6.20199 22.505 12.001 22.505Z" fill="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.9411 13.953L7.58105 16.424L10.0601 10.056L16.4201 7.58502L13.9411 13.953Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M10.0601 10.056L13.9491 13.945L7.58105 16.424L10.0601 10.056Z" fill="white" />
        </svg>
    )
}

export const ExploreIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9411 13.953L7.58105 16.424L10.0601 10.056L16.4201 7.58502L13.9411 13.953Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M10.0601 10.056L13.9491 13.945L7.58105 16.424L10.0601 10.056Z" fill="#262626" />
            <path d="M12.001 22.505C17.8 22.505 22.501 17.804 22.501 12.005C22.501 6.20602 17.8 1.505 12.001 1.505C6.20199 1.505 1.50098 6.20602 1.50098 12.005C1.50098 17.804 6.20199 22.505 12.001 22.505Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const AddIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_50)">
                <path d="M2 12V15.45C2 18.299 2.698 19.455 3.606 20.394C4.546 21.303 5.704 22.002 8.552 22.002H15.448C18.296 22.002 19.454 21.302 20.394 20.394C21.302 19.455 22 18.3 22 15.45V8.552C22 5.703 21.302 4.546 20.394 3.607C19.454 2.7 18.296 2 15.448 2H8.552C5.704 2 4.546 2.699 3.606 3.607C2.698 4.547 2 5.703 2 8.552V12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.54501 12.001H17.455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.003 6.545V17.455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1_50">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
export const LikeIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_103_37)">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" strokeWidth="2" />
            </g>
            <defs>
                <clipPath id="clip0_103_37">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
export const ReelsIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M2.04907 7.00201H21.9501" strokeWidth="2" strokeLinejoin="round" />
            <path fill="none" d="M13.5039 2.00098L16.3619 7.00198" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path fill="none" d="M7.20703 2.10999L10.002 7.00199" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path fill="none" d="M2 12.001V15.45C2 18.299 2.698 19.456 3.606 20.395C4.546 21.303 5.704 22.002 8.552 22.002H15.448C18.296 22.002 19.454 21.303 20.394 20.395C21.302 19.456 22 18.299 22 15.45V8.552C22 5.704 21.302 4.546 20.394 3.607C19.454 2.699 18.296 2 15.448 2H8.552C5.704 2 4.546 2.699 3.606 3.607C2.698 4.546 2 5.704 2 8.552V12.001Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M9.76308 17.664C9.62495 17.5842 9.51027 17.4695 9.43057 17.3313C9.35087 17.1932 9.30897 17.0365 9.30908 16.877V11.63C9.30889 11.4703 9.35078 11.3133 9.43053 11.175C9.51029 11.0366 9.62508 10.9217 9.76337 10.8418C9.90165 10.7619 10.0585 10.7199 10.2182 10.7199C10.378 10.7199 10.5348 10.762 10.6731 10.842L15.2181 13.466C15.3564 13.5457 15.4713 13.6605 15.5511 13.7987C15.631 13.937 15.6731 14.0938 15.6731 14.2535C15.6731 14.4131 15.631 14.57 15.5511 14.7082C15.4713 14.8465 15.3564 14.9612 15.2181 15.041L10.6731 17.665C10.5347 17.7449 10.3778 17.7869 10.2181 17.7869C10.0583 17.7869 9.90142 17.7449 9.76308 17.665V17.664Z" />
        </svg>
    )
}
export const ActiveMessageIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_58_36)">
                <path d="M12.003 2.00098C13.303 1.95924 14.5981 2.17924 15.8115 2.64792C17.0248 3.11661 18.1315 3.8244 19.0659 4.72925C20.0003 5.63411 20.7432 6.71755 21.2506 7.91521C21.758 9.11286 22.0194 10.4003 22.0194 11.701C22.0194 13.0017 21.758 14.2891 21.2506 15.4868C20.7432 16.6844 20.0003 17.7679 19.0659 18.6727C18.1315 19.5776 17.0248 20.2854 15.8115 20.754C14.5981 21.2227 13.303 21.4427 12.003 21.401C11.0251 21.4037 10.0513 21.2745 9.10796 21.017C8.93097 20.9687 8.74274 20.9828 8.57496 21.057L6.59096 21.933C6.47099 21.9857 6.33992 22.0082 6.20923 21.9985C6.07854 21.9888 5.95223 21.9472 5.84137 21.8773C5.73052 21.8074 5.6385 21.7114 5.5734 21.5977C5.50829 21.4839 5.47209 21.356 5.46796 21.225L5.41396 19.445C5.40945 19.3369 5.38322 19.2308 5.33683 19.133C5.29045 19.0353 5.22485 18.9478 5.14396 18.876C4.14013 17.9723 3.34075 16.8649 2.79926 15.6275C2.25776 14.3902 1.98662 13.0515 2.00396 11.701C1.99636 10.3995 2.25209 9.10999 2.75579 7.90993C3.25948 6.70987 4.00071 5.6241 4.9349 4.71794C5.86909 3.81178 6.97693 3.10395 8.19177 2.63703C9.4066 2.17011 10.7023 1.95376 12.003 2.00098Z" fill="#262626" strokeWidth="1.739" strokeMiterlimit="10" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17.7901 10.132C17.8736 10.0008 17.9081 9.8444 17.8875 9.6903C17.8668 9.5362 17.7923 9.39437 17.6772 9.28989C17.562 9.1854 17.4137 9.12499 17.2583 9.11933C17.1029 9.11368 16.9505 9.16314 16.8281 9.25897L14.2721 11.309C14.1631 11.3915 14.0302 11.4364 13.8934 11.4367C13.7567 11.4371 13.6235 11.3929 13.5141 11.311L11.0601 9.46998C10.886 9.33963 10.6868 9.24673 10.4751 9.19712C10.2633 9.14752 10.0436 9.14227 9.82969 9.18172C9.61581 9.22117 9.41242 9.30446 9.2323 9.42635C9.05218 9.54824 8.89924 9.7061 8.7831 9.88998L6.2161 13.87C6.13181 14.001 6.09667 14.1576 6.11691 14.3121C6.13716 14.4666 6.21147 14.6089 6.32666 14.7138C6.44185 14.8187 6.59048 14.8793 6.74617 14.8851C6.90185 14.8908 7.05453 14.8411 7.1771 14.745L9.7331 12.696C9.8422 12.6132 9.97531 12.5682 10.1123 12.5678C10.2492 12.5675 10.3826 12.6118 10.4921 12.694L12.9441 14.534C13.1182 14.6645 13.3175 14.7575 13.5293 14.8072C13.7412 14.8569 13.9611 14.8622 14.1751 14.8228C14.3891 14.7833 14.5926 14.7 14.7728 14.578C14.953 14.456 15.106 14.298 15.2221 14.114L17.7901 10.132Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_58_36">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
export const MessageIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_58_53)">
                <path fill="none" d="M12.003 2.00098C13.303 1.95924 14.5981 2.17924 15.8115 2.64792C17.0248 3.11661 18.1315 3.8244 19.0659 4.72925C20.0003 5.63411 20.7432 6.71755 21.2506 7.91521C21.758 9.11286 22.0194 10.4003 22.0194 11.701C22.0194 13.0017 21.758 14.2891 21.2506 15.4868C20.7432 16.6844 20.0003 17.7679 19.0659 18.6727C18.1315 19.5776 17.0248 20.2854 15.8115 20.754C14.5981 21.2227 13.303 21.4427 12.003 21.401C11.0251 21.4037 10.0513 21.2745 9.10796 21.017C8.93097 20.9687 8.74274 20.9828 8.57496 21.057L6.59096 21.933C6.47099 21.9857 6.33992 22.0082 6.20923 21.9985C6.07854 21.9888 5.95223 21.9472 5.84137 21.8773C5.73052 21.8074 5.6385 21.7114 5.5734 21.5977C5.50829 21.4839 5.47209 21.356 5.46796 21.225L5.41396 19.445C5.40945 19.3369 5.38322 19.2308 5.33683 19.133C5.29045 19.0353 5.22485 18.9478 5.14396 18.876C4.14013 17.9723 3.34075 16.8649 2.79926 15.6275C2.25776 14.3902 1.98662 13.0515 2.00396 11.701C1.99636 10.3995 2.25209 9.10999 2.75579 7.90993C3.25948 6.70987 4.00071 5.6241 4.9349 4.71794C5.86909 3.81178 6.97693 3.10395 8.19177 2.63703C9.4066 2.17011 10.7023 1.95376 12.003 2.00098Z" strokeWidth="1.739" strokeMiterlimit="10" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17.7901 10.132C17.8736 10.0008 17.9081 9.8444 17.8875 9.6903C17.8668 9.5362 17.7923 9.39437 17.6772 9.28989C17.562 9.1854 17.4137 9.12499 17.2583 9.11933C17.1029 9.11368 16.9505 9.16314 16.8281 9.25897L14.2721 11.309C14.1631 11.3915 14.0302 11.4364 13.8934 11.4367C13.7567 11.4371 13.6235 11.3929 13.5141 11.311L11.0601 9.46998C10.886 9.33963 10.6868 9.24673 10.4751 9.19712C10.2633 9.14752 10.0436 9.14227 9.82969 9.18172C9.61581 9.22117 9.41242 9.30446 9.2323 9.42635C9.05218 9.54824 8.89924 9.7061 8.7831 9.88998L6.2161 13.87C6.13181 14.001 6.09667 14.1576 6.11691 14.3121C6.13716 14.4666 6.21147 14.6089 6.32666 14.7138C6.44185 14.8187 6.59048 14.8793 6.74617 14.8851C6.90185 14.8908 7.05453 14.8411 7.1771 14.745L9.7331 12.696C9.8422 12.6132 9.97531 12.5682 10.1123 12.5678C10.2492 12.5675 10.3826 12.6118 10.4921 12.694L12.9441 14.534C13.1182 14.6645 13.3175 14.7575 13.5293 14.8072C13.7412 14.8569 13.9611 14.8622 14.1751 14.8228C14.3891 14.7833 14.5926 14.7 14.7728 14.578C14.953 14.456 15.106 14.298 15.2221 14.114L17.7901 10.132Z" />
            </g>
            <defs>
                <clipPath id="clip0_58_53">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}
export const SettingIcon = ({ className }: IconProps) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_43)">
                <path d="M12 20.635C16.769 20.635 20.635 16.769 20.635 12C20.635 7.23102 16.769 3.365 12 3.365C7.23103 3.365 3.36501 7.23102 3.36501 12C3.36501 16.769 7.23103 20.635 12 20.635Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.232 3.656C14.0604 3.60803 13.9009 3.52447 13.7637 3.41075C13.6266 3.29704 13.5149 3.15572 13.436 2.996L12.93 2H11.07L10.565 2.996C10.4861 3.15572 10.3744 3.29704 10.2373 3.41075C10.1001 3.52447 9.94058 3.60803 9.769 3.656M9.768 20.344C9.93958 20.392 10.0991 20.4755 10.2363 20.5892C10.3734 20.703 10.4851 20.8443 10.564 21.004L11.069 22H12.931L13.436 21.004C13.5149 20.8443 13.6266 20.703 13.7637 20.5892C13.9009 20.4755 14.0604 20.392 14.232 20.344M3.656 9.768C3.60803 9.93958 3.52447 10.0991 3.41075 10.2363C3.29704 10.3734 3.15572 10.4851 2.996 10.564L2 11.07V12.932L2.996 13.437C3.15572 13.5159 3.29704 13.6276 3.41075 13.7647C3.52447 13.9019 3.60803 14.0614 3.656 14.233M20.344 14.232C20.392 14.0604 20.4755 13.9009 20.5892 13.7637C20.703 13.6266 20.8443 13.5149 21.004 13.436L22 12.93V11.07L21.004 10.565C20.8443 10.4861 20.703 10.3744 20.5892 10.2373C20.4755 10.1001 20.392 9.94058 20.344 9.769M7.678 4.522C7.52269 4.60944 7.35069 4.66318 7.17323 4.67972C6.99576 4.69626 6.8168 4.67523 6.648 4.618L5.588 4.27L4.27 5.587L4.618 6.649C4.67523 6.8178 4.69626 6.99676 4.67972 7.17423C4.66318 7.35169 4.60944 7.52369 4.522 7.679M16.322 19.478C16.4773 19.3906 16.6493 19.3368 16.8268 19.3203C17.0042 19.3037 17.1832 19.3248 17.352 19.382L18.412 19.73L19.73 18.413L19.382 17.351C19.3248 17.1822 19.3037 17.0032 19.3203 16.8258C19.3368 16.6483 19.3906 16.4763 19.478 16.321M4.522 16.322C4.60944 16.4773 4.66318 16.6493 4.67972 16.8268C4.69626 17.0042 4.67523 17.1832 4.618 17.352L4.27 18.412L5.587 19.73L6.649 19.382C6.8178 19.3248 6.99676 19.3037 7.17423 19.3203C7.35169 19.3368 7.52369 19.3906 7.679 19.478M19.478 7.678C19.3906 7.52269 19.3368 7.35069 19.3203 7.17323C19.3037 6.99576 19.3248 6.8168 19.382 6.648L19.73 5.588L18.413 4.27L17.351 4.618C17.1822 4.67523 17.0032 4.69626 16.8258 4.67972C16.6483 4.66318 16.4763 4.60944 16.321 4.522" strokeWidth="2" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1_43">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}


export const StoryBorder = ({ className }: IconProps) => {
    return (
        <svg width="74" height="74" className={className} viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="37" cy="37" r="35" stroke="url(#paint0_linear_60_2)" strokeWidth="2" strokeLinecap="round" />
            <defs>
                <linearGradient id="paint0_linear_60_2" x1="67.1238" y1="5.35913" x2="6.44272" y2="68.6409" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF469F" />
                    <stop offset="0.592597" stopColor="#F91BFD" />
                    <stop offset="1" stopColor="#7737FE" />
                </linearGradient>
            </defs>
        </svg>
    )
}
