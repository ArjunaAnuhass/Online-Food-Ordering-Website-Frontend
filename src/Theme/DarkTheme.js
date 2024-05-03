const { createTheme } = require("@mui/material");

export const darkTheme=createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#e91e63"
        },
        secondary:{
            main:"#5A20CB"
        },
        Black:{
            main:"#000000"
        },
        background:{
            main:"#000000",
            default:"#0D0D0D",
            paper:"#0D0D0D"
        },
        textColor:{
            main:"#111111"
        }
    }
})

