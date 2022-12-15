
import { HStack, Box, Spacer } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const links = [
    { path: "/", text: "Home" },
    { path: "/login", text: "Login" },
    { path: "/register", text: "Register As A Professional" },
    { path: "/help", text: "Help Center" }
]


function Navbar() {

    const defaultstyle = {
        color: "white",
        textDecoration: "none",
        padding: "0px 10px"
    }
    const activestyle = {
        color: "yellow",
        textDecoration: "none",
        padding: "0px 10px"
    }
    return (
        <div>
            <Box display="flex" backgroundColor="black">

                <Box>
                    <img style={{ cursor: "pointer", width: "200px", height: "80px" }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgSFRYYGBgaGBgYGBgcGBIYGBgYGBgZGhgYGhgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQrISQ0MTQ0NDQ0NDQ0NDExMTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDE0NDE0NDE0NDQ0NDQ0NP/AABEIAKkBKgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEkQAAIBAgMEBQkEBQoGAwAAAAECAAMRBBIhBTFBURMiYYGRBjJScZKhscHRFCNC8BVicoKyJDNTk6LC0uHi8SVDRHOzwxY0VP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIBEBAQACAgMBAQEBAAAAAAAAAAECERIhE0FRMWEDgf/aAAwDAQACEQMRAD8A4iIRRSh4QgiFCFHEaKA8a/WHqPxWPG/EPU3xWUHFFFAcQxBEIQHjiNHEocRRCPaA6woIhQCEeAI4MA4rwY4kBCPBihkV4rwbxrwDvHBgrrulmjhSd8oFNZHXZwpYaAaX01JNgAeGp36/KaKUgsHEKCMp8L2PLTxks6GMMdvVLkdImSykFgLEgkjdcHQjeRwjPXplkaxuoG644jQ33ro1zbj2CXKWAsVO64IYWAura2A7DlHqEjxOCQghmY5SvW06inSzNx0JPfczhcdLKJ8OwJYsWcgXsLIOKqBfWzG9x7zuvovBQVsPTexF9bLY/I25TJwzqaY3g2JBYEi5XW1+rfS3O9+cnw6Wyvvv1lRd5OnWAuCTuHbvnC732q6mIZ3sQVtZwCN+pUanUa6X1+klPCg1V3WuWZbWJ9E8iNR6rCBh1zNmVVX8RVbAX6wNxzueHIdknpKxcldDYbwTxGh009eu7dNY63v2npr0KWS4But7gHhfUi/EX1111Mlyyg7qhJdyykDKLtmB4jqkAjtIH0r/AKVX0G/rHnoml242KKOJtSjxRQEI4jRxCHg/iHqPxWFIWb7xRzVv7v0PhKJxFeIRQCBhCAI4MA4QgiEJQ4jiNFAcGEIEIQCjxhHgPHEGK8gK8WaBvk9HCk75WUY13SxRwhO+XaOFAlkC0aEFLDBZMYiYJMBjAYwiZTr0C51LBdLAErfW9yRY7hu3ayUV8Xjwuucm17KtjqOG7Tv8DKIwVR0ZmddWNlYKDox0IFtb8dd43S3iMGACAbZjl0HVRD5x3WzWB133PKV2xoQkIAMoALZSrG+uUqd9r79fnOdFrAYdTTDIl2PWvd1yrrluLnXs9fHfa2ZSN9TfXLc7wqLlAHrbMe+UMJjSjLTa+UaZPcLi5JF+dvrIdp5UuBmYXy3331HWJF93bx46TzZbsummtQY5WBvfOTqNddfmB+7KwrN0uRWsxFu21/dK+Gz10DHLoTlU5sltd9mBOmliJe2fQAqEMiE6G4JOtxz3DsnTG9fnbN7qwmxlYlqhLE246iwA0beNwkn6GT0qntH/ABS/cjj8Pz/tCz9hmp/pjWtPOIQgiFOqlFGjiUPFGjiAQmZXr/fX4LlHxzfEyXFY8LdV37r23TPyHf74RvmNKWFxdlCvppo3ZqNfCXTKFHWMIawCEeNHEocRxGEeAceBeK8ArxXgCWaWHJhlFJqWGJ3y9QwoEtrTAjQrUMKBLaoBCgyhExjFFAYyOomhy2DHiRu7TztJbRESClURUQ5yW4Esbkk6cdF7rSnRrMqhiTZTkNy1szebnzC671FxzmsyC4JG7d2erlM/EZEXKEDEk2uuYlnPzJtqQBeZsB5yVBsRcXKm4IKmxW4va5I1HAE9swKmMYv1aaplUqDqfON7nQam44cbERVqLszMQoCka6ZbNoLcD2f5aRUgQWUsBmADa3OrDKTqRq3b4TFEuDwj2JFr2T8TG5IW3ZpmXs09UuPs+xscwbMBqOqLjOWJBI0AbiOfZJ8GWWsyowysgYHLr1mGYnSwNgeG88bWl50c1CoRD+MDMWBAC0zwHWIJ75xyvW2tJgmRwqKL5BppfQgC2l9deXm9kPChulO4eJ0v3a3tzklGuSuYLroAq6uQTbQG3V7YqWFJqXJIFvN82+o4i+buMf5271WWoyk/j15WX/eHk9cSJYW17zf3x7HnOvFt5wI8aPNhoQEYQoDGNHMaUYu0VyufXfxgI1xNevh0e2a+nIgHxIPwjvhKDMWKOL8BUphfDo90nsVcRQIWmp3sqkDW4DFt/wAZo3kdVQ1TpOtfkzBrcBYhRwFoQmt7Z0MGOIwjiFEDCBgXivKJAY95EGk9OiWgBeTU8OTLmHwdpfpUI0m1ShhAJep0QJIFAjzWk2UGFBgKKPaFIAitCkNSuFgSSGpXAldqrPu3SWlhbamQCCzdgglUWxbzr33E3OUiwAGtgTLTqdw07ePdKLtTGl7nXewJvztz7pKHc0n1up9zaqQBzHYJnHZ7lczOxuBmu9TKOBGUrcHffXT3SvistrAsLEklrLckElr5bDx4WFrAiXZVMmopZ7WLsB1my5sotYtxuTu4b9ZyyyWJsNpUS4UKucEgVAzE3yhdNwOmlxrLlCovSMzXzBLCwfTz213cCouecp4pSegYWDOyC/Eh6djryFhp9bl6FG1RxmA6qqTbeNfwgDUqANP9uOW7OlrTpJ1Mym91BupYNlIBNjx7rd0t4R2uEKlQCTw4lbC4NjxlfCLemAwzHcR52W3M8CO3W8sYdAKm/gNN3EcJcb6vtlp3sYV+z4RBfzwjzrMbPbbzi0cCOBHtNhrR40V4DGCYdo6pGxGtMmWaeDJktJJoYemWIVVLMTYKASSTwAGpMzaumecFIHokTZqoVJVgVIJBBBBBG8EHcZXxOHYIHKMEa4VyrBWKmxCtaxsd9olLGVaPeWaeFeo2Wmju2/Kis7W9SgmNX2fVRsr03Qng6Oh8GAnSM1XvJKdEtL2E2W7BnCMwWxdgrFUvuzEaLex38peo4cCWRNqWHwU0aOHtLQwrKocqwVr5WKkK1t9m3G0uLsyuRcUKtuBFOpY+6aRSVAIUd1IJBBBBsQQQQRvBHAyShhXe+RHe2/Ijtb12GkqIopJ0D5+jyNnvbJlbNfllte8nbZtdQWajVAAuSadQAAbySRoJBVitLFHA1XGZKbsL2uqOwvyuBIXVg3RlWz3AyZWzXO4Zd9zyhQ2kb1QJFiHZWKMrKw0KsCrA9qnURqWBdlNTKxQGzNlbKpO4FtwOokET12bQR6eFJ1aXmwhSwdGUkAgMpUkHcRfeO2T0MK7+Yjvb0UdreAkFVEA3RzLH2Z8/R5Hz+hlbPz8214dTZ1ZVLNRqqBqSabgAcySNIFO0q41Mw6zZUG+289nIS8lFmvkR3IF7Kju3goJlHE4SoHC1AyNYtkOZMqi1l53JOp5BrSUZlKiC1tABayjo3J/WbMQeNtBrxvJUFmFiMxtpZlClTmUdaxIHW8RytNKjQCi2/meZ/PDcIVUWCkDzXXQWHnHIT3Bie6YuMGBi6ZFNKi6lHQDjY3yKLW86xGnAW3ky3hqDNVZ0zCzORmJOq9TQHjbSxMW0KJ6Bm4pVv61+05rEeq0nWrZHIBJ+/Og9Ko1rH1cJnKYz9reumlhjYAE62BNxbfb/AD4w6L/eZSNRu9RIuPG3vhU3vluNwBLX63Ijute/bDRPvO0C27eLjUW0MYYz6zV6KPGm2nnYjxAQrSACIrQrR7QBAhoI1o4MKsIZt+S7fy3D/wDdT+KYKtNfyQZmxtAgXHSU2BuLBbklie6S9dm2/tjyWxtTE1qiUCVaq7Kc9EXVnJBsWvuMHyjwFSls7CUqiZHV8RmW6m2Zyw1UkbiDKm2EY4uucxt01S2pt55mrtGnfZ2FBNyHr+vV2mpE2bbVR8EtPBYdjT6ivWqLo7u1/wAW8AW4cwOEk8nMY+JY4PEsaqVFbIz9ZkdVLBlY68D7u29naODONVK9EqaoVUq0iyq11v1xfeDf4dsWysAcG32rEWQqrdHTzAs7kEbgTYWJ8ZvrSG8k2FCnjC6hlXoldea56iOLeomQnyd/lIVT9wy9KKvAUhqbn0hu7wYOynzYXHMd7CiT2ku5PxlBdrVRhzhs3ULX/WtvKg+iTraNVlt+U+JWphKDoMqZqiqP1U6q+IW/fLu2cJjGdGw+fJ0SDq1FQZrG+hYa7pibSb/h2F/bq/xGam3djV6zo9NQV6Gmt86LqL30J7RA5Nr3N999fXxnVU+lfBUhhHIKZumRGyuWJ87TUjfp2jlpzlSgUZkYWZSVIuDqDY6jfNTCbHxQCVqAvcAhldBlvwa5Fu0TVIj2VXd8bSNRmZg6qS3ndXSx7fXLm3cNjVNZ26Toczn+cBXIWNupm3ajS0LaGMQ7Uw6gqXHRrVKkZTUF768SBYeA4SjtnyexJrVqmQFC1R75083NmHVvfdfwkFjDVK52aDhxUz/aSD0Yctlya3y62vb3SLyjLmjhhVP8pUMWOmdVzApmt+Lce4yTCVHp7OUo7I32m91JBtk3G28aDTdD2xTWtSXGKAGNkrqODiwD25HTxXtmfYi8pKK1OixgFulQB7cKiCze4W/dh7X+5wtHCjRmHTVBxu2iqfUP4RLPk0Uqo2GqmyhkrLf9QjOO8fEzF2tizWrPU4MTl7FGijwAlabu1sH02NoUjoGpU788oDs1u4GUNrbaqdI1Ok5p00JVFQ5NFNrkjUk2vL21sZ0WMoVd4WlTvbkQwbvsTK+0NgvUqNVw+WrTdiwKsgKljcqwYi1iZBFsHFvVx1FqjFmF1BNr5QjkC/Hed8LbGExqio9TpOizG96gK5S/V6uY6buELY2BejjqKPlDasQGVrXRxYkbjp7xIto7CxCmpUKjIC73zoercm9r33Si5s3O+B6PDPlqrUZqiqwV3XXKVPK2XwM57aGIqs1qzMXQZevoyi97G+vHjL+B2NiHVa1EX1NijqrKQSNbkESz5WMD0KuQa607VWFj1tMoNtMw63jIOVqYkLuBOtt2l7X+Hy5iZmeoWLPxYra1j5p0Fr8Sovv1mrWw91sDbt3kczrvN9Y2HwoG8aEElTrY5swGu+1zrz14znlMqyo4nMcNVY9axB0OnmpUv274SsFollJ/mar9Um9iSdPGKr1aWKp6ABGYdgKuF07FRRI6Rtgxc/8ASkk+tRJJe9usnX/W2WNj+fXpIkUs9gbG3bz/AD+ReTEamR4Yfed3zE3MJL057TDZx9P3H6x/0f8ArDwl+KF08/AhWjgRWkaNaMYUYKTugAYDE8JepYInfKI2NUIQmu3Xt+G1roW9LslmKbQl3F7X6tr67tQPmJ1GApEE8QUTlr1XPdMRfJ1z/wBQ/b1P9UtUdjVl83GVR+7f4vFxtmk23MBmuwdbC9geYN9LdknCicdjsbWw1VUau9UOmbrXXL1iNACeUtrtQnifEzvh/ncp+uWWfGumMBuZnPfpE8z4mGuN7T4mb8VTyz42yIssxvt3afGC20O0+MeKp5J8bWWR1GCgnTSYT7UtxPiZAdpE6fGPHfp5P4u0PKYtYCl/b/0TUr1RrYsOfAHQX8L6+sTIoYMVAVAClhYMFW6nmJP+gKtyxxL3JJJyAXLWzHRuNh4Tnljca6Y5TKMbaGODuEFsluqeZ0JuO73TpGxCrWpKLXNMX3bsxy/OZi+SQ39KP6vd/blbbKPhnp1S4qE5kuUVCAoFrEE8zGN77Mp07ICK05zDbTzKGude0yf7ceZ8TN+K/XPy/wAbmWLLMT7b2nxMQxnafEx4r9PL/G3liW43XExRjO0+JhfazzPiZPFfp5f418sWUTJ+1nmfEyzhajFhqfEyX/Kz2vlnxdGm7SARJWkRN5ydgWjwgse0oxsalqldTufDZu9M6keDL4yKiw+yBj/+VfAg/SWNtKBZtQWpYincdtPP/wCo+Mq4T/6txqfslIWvpvqD5e6Z123vp0JGpkNAfed3zEsEayGgPvO75iacmnFFFMNuEtEFvDyW3+EWflpIp1pDj4S1SUDhKytJBVEsRfR5Wp1OrR/d/wDE0ibEzP8AtHVp9lv4CJqVLG++LVRdiAOZIA98pfp2mTYN35WA8bTl/KKpeon7B/iMpYJjm8fhOmOrWMrY3/KbB1WC4lmR0Fk6oZSoLEre5N9Ta47NJDhusoI5S7i3/wCHEH0lHg9/lKuz0ORdDu5T0YTVscMruJQkciJyeR8DK7u54N4GdKwN3tKz1CY5pufwt7JjrQc/hb2W+kza1pDaWMPQLEASCvVWnowOb0ba9/KZmJxztpew5DQd/OYyzkamNydjg9rUkJUMLrpm1K35AjefdNfDY3PqrKwsd1wQRbQ+u/unmCOZ1nkZW67JzRn9llX+97pyuXKXbcxuN6dLtDFGlSappcZQL3y3ZlUEga2Ga/dOd2pnxKqnS0SyksqhXQsbWyhmYjX42mt5W6YKp60/8iTz+m55mZws9t5b9NzZVS65dbiaNpl7MN3Y8SAT6zqZrBG5HwM9c/Hmv6ECOBC6NvRb2TF0bei3smENaGI2RvRb2TAqZlFyrey30gTAyWrtVKAGfVjuUWJ9Z5Cc9itqNuW6jnx/ymJXrFmuTOeeUjeOO3peE2zScXzD4EdxmlTqKwupB9Xznk+GqkHfOl8mmvXTfx/hM43GWbjpMrLquztCtCyyHFpdba7+ZHvE5OzM8pzlwrvxXcbXtnBpk+DmUsIrLhHIGowyLl0GqGrcX/elttjJUBRnqZbWIzsQQeGvqhrsBACod7HeM2hGtxu7T4yapvrTWffIqY+87vmIGHwjKR947DiGym/uuO6SoPvO75yxlfiiimW3B5oxaZn2pvRPhBbFNyMztpp5os0yxim5GGMQ3IxsX2MqE9VD6v4DIumf0W8DKlescluSkf2SPnLEoNp1FdwVOgFr236k6SCjZTe95WBj5p1xuvxys21X2i5QU81lBuABbXXUnffUyJsSTvdvaaZ14rzfOs8YvGr2nxMXSCUs0WaOZxXQ4hisOZ8TM/NFmjkcV8sp3k+MjNFD+Jvd9JUzR80cp8NLQwa8H8ROi8j6JXEm5BHQtYj9unecoHnV+SFS1UtldrUmHVXNbM6HXl5pi2XGrN8o2/K8fyKoObUx/bWcEmHA3t7p2flnic2EK5HXrr5wUbie284FXmMbI1lLWzQxjILK7AdmkkO0XP439ppiZos06eRy4Nr7c3pv7TfWOMc3pt7TfWYuYx80vkXhG4Me3pt7TfWGu0W9N/ab6zBzmLOZfInButiVJuTcnjxkFWhRbfcHmDYzKDmOKhl57/YcdflaKYCkNzsPWFPyE19i5KVRXLggdljrpznMBzJUc33xMsfzRZfr1im6soZTcHUGDXXqyjsLN9mSy30PEDiZdIfcU046r9Z5spq2O+N3NoE0v3fOSho4SOEjZokOogU/5zuHxhsDY5Rc2NhMxNoFanWUjSxzC3H3Rs034pBQxSsOX55yfMJlWK1BzwPiZE+FbiD75yZxlU/8x/bf6xxjHH/Mf23+sw06lcO43A98ILU5fnwnItj6npv7b/WEuIq72qOOzO/1gdbepy90pbTqOaFRbAXRxy3qbknh65gnGPwd7ftv9Y32p7Wzvbj1mN/XrA5gNGzTo8qj8K+ysCkFu2i+dyHITpyY4sDNGzToapTTqjzhwXhCUqT5q+yv0jaac5mj5p05dAPNX2Vgqyegvsr9JdmnNZos065cgHmr7K/SMXQnzE9lfpGzTkswizTradRL+Ynsp9JaRkP4E9hPpGzTiQ87nyA82q4FySia6eaGP96ZeNRM62VRpwCjXOnZym9hagW4UBRcmy6DdyEb60SJvLZWODckAAMh3/rgfOeahxPRzXzFlY3XTQ6jwOkx8SEGJTqLbK2mVbceFpJ0t7cj0gi6QTuKbpfzE3egn0lpAhF8iexT+ku6mo896QRdIJ6KUS18iexT+kiWog/BT/q6X+GNnGOA6QRCoJ6MlRP6Ol/V09PdLOGFJms9KmPVTp7+8Rs08w6QR+kE9hGy6H9Gh/cp/JYhsqhe/RJy8xT7rS8zi8gFQQ0qi89Q25s+kuGcrSQGwsQiAjrLxtL/AOjaH9DT9in9I5JwZXk9jQuFQZSdCdCPSM0htJfRb3fWWqdNVAVVCgbgAAB3CHM27trUmppkYTaCuzLexF9Dppff2y2Kg5jxEuERso5CRUdAcY9agjizKD8R6jJIoGa2zSuqN3H82jdf0PcZpxQPKzUjBSY0maYbDmC7t8EEnU/5QX4SbhCAJg5oTboB3980FeQo+revn2CWDxlfn64QzvqJIK0hfhHWNmkpqwkq8ZAYbbpUStiDEa2kgO+EYEy17SyuJsAJQ5SVoCrVruummU8f1gd3cPHsmxhK19JiHeP2TNXZ2/uliLSVLFvX8zMnFYg9MrW9IeN5pV97ev5mY1bzx3/CWi2mI4yzSx1haZiw1kGmuP4R/ttxaZvGOu+BcGJk6Y7QTOG+KnA3k284Fr6cNBLFPb78T7hObG6SJxkVsbU2w7UnXQg2B3A2zC+tpprtV+zwE5et/Nnu+Imsu7x+EDUbab77i37MifbDjiPZlf6GU23H1SDXobYc6Nb12kr7RqDUZSPVr8dZh4f5S6nmj88ZReXazcbDuMF9quBfqnuP1lB9x/PKRjze6IJX8oqg4J7Lf4o3/wAmf0V8D/imLiN5lWB//9k=" alt="Urban" />

                </Box>

                <Spacer />

                <div style={{ display: "flex", alignItems: "center" }}>
                    {links.map((link) => (
                        <NavLink
                            style={({ isActive }) => {
                                return isActive ? activestyle : defaultstyle;
                            }}
                            key={link.path}
                            to={link.path}
                        >
                            {link.text}
                        </NavLink>
                    ))}
                </div>

            </Box>
        </div >
    )
}
export default Navbar;