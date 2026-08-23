import definePlugin from "@utils/types";

export default definePlugin({
    name: "UsernameFontFix",
    description: "restores the default username font, without disabling custom colors or effects",
    authors: [{name: "CallMeAnny", id: 326056456602255360n}],

    patches: [
        {
            find: "pixelify__89a31",
            replacement: {
                match: /(cherryBomb|zillaSlab|chicle|museoModerno|neoCastel|pixelify|sinistre|playpenSans)__89a31/g,
                replace: ""
            }
        }
    ]
});