import * as S from './styles'

export type LogoProps = {
  size?: 'small' | 'medium'
}

const Logo = ({ size = 'medium' }: LogoProps) => (
  <S.Wrapper size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 96 46"
      aria-label="Justin"
    >
      <path
        fill="#000"
        d="M49.5011 12.8392c.0568-.1085.1533-.1573.2895-.1465.1476.0109.2952.0543.4428.1302.1589.076.2894.1682.3916.2767.1022.0976.1362.1789.1022.244-.0341.0868-.0738.1736-.1192.2604-.2725.5966-.6414 1.356-1.1069 2.2781-.454.9113-.9706 1.8117-1.5495 2.7012-.579.8787-1.175 1.5784-1.788 2.0991-.613.5099-1.2033.6618-1.7709.4557-.7039-.2713-1.2374-.6292-1.6007-1.074-.3633-.4448-.5052-1.0686-.4257-1.8713-.0113.0108-.017.0217-.017.0325-.3746.5533-.7549 1.0848-1.1409 1.5947-.3746.499-.8798 1.074-1.5155 1.7249-.3633.3254-.8514.4773-1.4645.4556-.613-.0217-1.1749-.1736-1.6857-.4556-.5222-.2821-.8174-.6564-.8855-1.1228-.0341-.8136.1589-1.9364.5789-3.3684.4087-1.4319.8855-2.7771 1.4304-4.0355.5336-1.2692.9593-2.0557 1.2771-2.3595.2384-.1627.562-.1953.9706-.0976.4201.0976.7833.2603 1.0899.4881.3065.217.4086.434.3065.6509-.2611.4448-.6131 1.1879-1.0558 2.2293-.4314 1.0415-.8344 2.0992-1.209 3.1731-.3633 1.074-.5676 1.8768-.613 2.4083.2497-.0868.7265-.6454 1.4304-1.676.7038-1.0306 1.4871-2.2998 2.3499-3.8077.8741-1.5079 1.6801-3.0104 2.418-4.50745.2157-.35799.5619-.48817 1.0387-.39053.4881.08678.9195.28205 1.2941.5858.3747.30378.5109.59668.4087.87868-.3405.7052-.7208 1.6381-1.1409 2.7989-.4087 1.1607-.7492 2.3052-1.0217 3.4334-.2611 1.1174-.3519 1.9689-.2724 2.5547.8741-.6183 1.7312-1.6163 2.5712-2.9941.8515-1.3777 1.5156-2.5601 1.9923-3.5473Z"
      />
      <path
        fill="#000"
        d="M58.8667 11.9768c.3292-.0217.6811.0596 1.0557.244.3747.1736.6585.3418.8514.5045-.0567.0651-.1021.1085-.1362.1302-.034.0217-.0681.0325-.1021.0325-.0228-.0108-.0511-.0217-.0852-.0325-.034-.0217-.0908-.038-.1703-.0489-.0681-.0108-.1703-.0054-.3065.0163-.4768.1194-1.1749.4448-2.0945.9764-.9195.5207-1.8106 1.0739-2.6734 1.6597-.8628.5858-1.4417 1.0198-1.7369 1.3018.0681.1085.1363.2116.2044.3092.1589.2169.3122.4393.4597.6671.4314.7594.5449 1.5188.3406 2.2782-.2043.7593-.6244 1.4699-1.2601 2.1316-.6244.6509-1.3509 1.1988-2.1796 1.6435-.8628.4231-1.7937.6075-2.7926.5533-1.0104-.0543-1.7767-.3526-2.2989-.895-.5222-.5532-.4824-1.3669.1192-2.4408.5109-.8028 1.1693-1.5567 1.9753-2.2619.7947-.7051 1.6177-1.3668 2.4691-1.9852-.1589-.2061-.3122-.4014-.4597-.5858-.352-.4231-.6698-.8461-.9536-1.2692-.2838-.434-.4938-.895-.6301-1.3832-.2497-1.1173-.1192-2.1967.3917-3.2382.5108-1.05223 1.2601-1.90381 2.2477-2.5547.3292-.19527.7209-.25493 1.175-.179.454.06509.8854.19527 1.2941.39054.42.19527.7379.37426.9536.53698.5789-.8787 1.0841-1.55129 1.5155-2.01776.4314-.46647.789-.80276 1.0728-1.00888.1589-.08678.3632-.05424.613.09764.2497.15187.4938.36883.7322.65089.2498.2712.4257.53698.5279.79734.1135.26035.1022.44477-.0341.55325-.4995.34715-1.0784.88413-1.7369 1.61096-.647.72683-1.1863 1.47534-1.6176 2.24554-.4201.7703-.5393 1.394-.3576 1.8713-.2725.0543-.6187-.0542-1.0388-.3254-.4086-.2712-.6868-.6455-.8343-1.1228-.0682-.3688-.0227-.7865.1362-1.253.1703-.4664.3235-.81357.4597-1.04138-.5676.01085-1.0671.37969-1.4984 1.10648-.4201.716-.6585 1.5459-.7152 2.4897-.0454.9329.1986 1.7303.7322 2.392.3633-.2278.7776-.499 1.2431-.8136.8514-.5858 1.7482-1.1553 2.6904-1.7086.9422-.5532 1.7596-.895 2.4521-1.0251ZM48.1048 22.3747c.4541-.0542.965-.32 1.5326-.7973.5789-.4882 1.0557-1.036 1.4303-1.6435.3747-.6075.4825-1.1119.3236-1.5133-.0681.0759-.1419.1464-.2214.2115-.6471.5641-1.2487 1.1499-1.805 1.7574-.5562.5967-.9763 1.2584-1.2601 1.9852Z"
      />
      <path
        fill="#000"
        d="M74.2943 2.96192c.806.22782 1.3793.61293 1.7198 1.15534.3406.5424.4882 1.07939.4428 1.61095-.0341.53156-.2271.89498-.579 1.09024.1249-.96549-.7038-1.6001-2.4861-1.90385-1.7823-.30375-3.9335-.27121-6.4537.09763-1.7937 2.3649-3.3546 4.99557-4.6828 7.89207-1.3168 2.8964-2.0888 5.4024-2.3158 7.5178-.2271 2.1045.42 3.1622 1.9412 3.1731-.7947.7268-1.7823.857-2.9629.3905-1.192-.4665-1.9129-1.5296-2.1626-3.1894-.0568-1.4536.4654-3.569 1.5666-6.3462 1.1011-2.7879 2.4464-5.55422 4.0357-8.29881-1.3055.45562-2.4634 1.01973-3.4738 1.69232-.2043.10848-.4427.08678-.7152-.06509-.2838-.16273-.5449-.39054-.7833-.68344-.2384-.2929-.3973-.56953-.4768-.82989-.0908-.2712-.0397-.45562.1533-.55325 2.1455-.95464 4.4784-1.71944 6.9986-2.29439.9195-1.35603 1.7823-2.429996 2.5883-3.221913.3292-.2495081.7719-.2603563 1.3282-.032544.5563.227811.999.564105 1.3282 1.008877.3292.44478.3122.86243-.0511 1.25297-.0795.07594-.1589.15187-.2384.22781 1.9866-.15187 3.7462-.04882 5.2788.30917Zm-3.014 9.74708c.1703-.1736.3632-.2386.5789-.1953.2271.0326.4087.1248.5449.2767.1476.141.1874.282.1192.4231-.3746.6292-.8968 1.5133-1.5666 2.6523-.6584 1.1282-1.4644 2.1154-2.418 2.9616-.9422.8461-1.7823 1.3886-2.5202 1.6272-.7151.1736-1.4701.0651-2.2647-.3254-.7947-.4014-1.1863-.9655-1.175-1.6923.1249-.9655.5393-2.2836 1.2431-3.9542.7152-1.6706 1.5098-3.0863 2.384-4.2471.2157-.2061.5903-.2549 1.1238-.1464.5336.1085 1.0047.3092 1.4134.6021.4086.282.5335.5749.3746.8787-2.6451 4.2741-3.5589 6.3787-2.7416 6.3136.8287-.0759 2.4635-1.8008 4.9042-5.1746Zm-1.2431-3.43343c-.2157.21696-.5279.30375-.9365.26035-.3974-.05424-.7606-.17899-1.0898-.37426-.3293-.19527-.4825-.40681-.4598-.63462.1703-.64004.403-1.25839.6981-1.85504.3066-.59665.5506-1.02515.7323-1.28551.2611-.24951.6697-.32544 1.226-.22781s1.0387.28748 1.4474.56953c.4087.2712.5222.56411.3406.8787-.1136.15188-.2498.34172-.4087.56953-.2498.34714-.5165.71598-.8003 1.10652-.2838.37968-.5336.71055-.7493.99261Z"
      />
      <path
        fill="#000"
        d="M83.5917 12.5788c.0795-.1301.1987-.1898.3576-.179.1703 0 .3406.0489.5108.1465.1817.0976.3236.2007.4257.3092.1136.1084.159.1952.1363.2603-.6585 1.3018-1.5382 2.6958-2.6394 4.182-1.0898 1.4753-2.1342 2.4951-3.1332 3.0592-.4087.1736-.8855.2169-1.4304.1302-.5335-.0977-1.0217-.2767-1.4644-.537-.4427-.2604-.7095-.5424-.8003-.8462-.1022-.4881-.0738-1.1336.0851-1.9364.1703-.8027.369-1.573.596-2.3106.227-.7486.3973-1.2747.5108-1.5785.0114-.0325.0228-.0596.0341-.0813-.9649.8461-2.015 2.0883-3.1502 3.7263-1.1239 1.6381-1.9639 2.9996-2.5202 4.0844-.1703.2603-.4938.3634-.9706.3091-.4768-.0542-.9195-.1952-1.3282-.423-.4087-.2387-.5903-.4936-.5449-.7648.2951-1.1065.806-2.685 1.5325-4.7353.7266-2.0611 1.6064-4.0301 2.6394-5.90679.1816-.29291.4371-.44478.7663-.45563.3405-.01085.6811.06509 1.0217.22781.3405.16273.613.35799.8173.58581.2044.217.2725.4122.2044.5858-.4541.8679-.9139 1.6977-1.3793 2.4897-.5222.8895-.8344 1.4807-.9366 1.7736.7379-1.0088 1.5326-1.9472 2.384-2.8151.8514-.8787 1.6687-1.5567 2.452-2.034.3974-.19527.8515-.21154 1.3623-.04882.5108.15187.9366.40142 1.2771.74852.3406.3363.4484.678.3236 1.0252-.0909.2061-.193.4393-.3066.6997-.454.9763-.9308 2.0882-1.4303 3.3358-.4882 1.2367-.7549 2.2727-.8004 3.108.9082-.499 1.8504-1.3126 2.8267-2.4409.9763-1.139 1.8334-2.3703 2.5713-3.6938ZM43.4793 29.6133c.1144-.1198.2973-.1497.5489-.0898.2515.0479.4688.1616.6518.3413.1829.1796.2287.3891.1372.6286-.5718 1.0419-1.2464 2.2095-2.024 3.5028-.7661 1.2933-1.578 2.4848-2.4356 3.5745-.8576 1.0898-1.7095 1.8622-2.5557 2.3172-.7319.2994-1.4237.2275-2.0755-.2155-.6403-.4551-1.012-.988-1.1149-1.5987-.0228-.3952.0286-.9101.1544-1.5448.1258-.6467.2687-1.2454.4288-1.7963-.3659.4551-.7776 1.0119-1.235 1.6706-.8347 1.2933-1.8238 2.5267-2.9673 3.7003-.3088.2514-.749.3053-1.3207.1616-.5718-.1437-1.0921-.4071-1.5609-.7903-.4688-.3832-.6975-.8083-.6861-1.2754.2058-1.8561.8176-3.7781 1.8353-5.766 1.0177-1.9879 2.144-3.5326 3.379-4.6343.6861-.5509 1.3093-.7425 1.8696-.5749.5718.1677 1.1492.4731 1.7324.9161.2058.1437.4231.2934.6518.4491.2859-.3353.5717-.6826.8576-1.0418.1944-.2635.4002-.5269.6175-.7904.263-.2634.6289-.3173 1.0978-.1616.4802.1556.8862.4191 1.2178.7903.3316.3593.4173.7185.2573 1.0778-1.498 2.7423-2.4471 4.8439-2.8473 6.3049-.3888 1.4609-.406 2.1974-.0515 2.2094.9034-.0599 2.7158-2.5148 5.4373-7.3647Zm-8.1474 1.3651c.0686-.1077.1029-.2754.1029-.5029 0-.2275-.04-.4371-.12-.6287-.0801-.2036-.2001-.3233-.3602-.3593-.1601-.0479-.3659.0599-.6175.3234-1.0177 1.1376-1.8696 2.4429-2.5557 3.9158-.6861 1.461-1.052 2.5028-1.0978 3.1255.5604-.491 1.3265-1.3651 2.2985-2.6225.9719-1.2574 1.7552-2.3412 2.3498-3.2513Z"
      />
      <path
        fill="#000"
        d="M53.016 29.8288c.0686-.0838.1715-.1018.3088-.0539.1372.036.2801.1138.4288.2336.1486.1197.263.2454.343.3772.0915.1197.1144.2215.0686.3053-.1829.3114-.3888.6766-.6175 1.0958-.5374.9819-1.1778 2.0657-1.921 3.2512-.7319 1.1855-1.538 2.2633-2.4185 3.2333-.8805.958-1.8067 1.5927-2.7787 1.904-.5717.1317-1.2407.0779-2.0068-.1616-.7662-.2396-1.4522-.5928-2.0583-1.0598-.606-.4791-.9491-.994-1.0291-1.5448-.0915-1.3053.1658-2.8202.7718-4.5446.6061-1.7244 1.3894-3.2752 2.3499-4.6523.972-1.3771 1.9496-2.2034 2.933-2.4789.2059-.0479.4003-.0359.5832.036.183.0718.406.1796.669.3233.1372.0719.2973.1557.4802.2515.0458-.0719.1029-.1617.1716-.2695.1486-.2155.2973-.4251.4459-.6287.1487-.2155.2573-.3412.3259-.3772.3888-.1437.8119-.0718 1.2693.2156.4688.2874.8347.6406 1.0977 1.0598.2745.4071.3202.7185.1373.934-.892.8742-1.6066 1.8502-2.1441 2.9279-.526 1.0658-.7261 1.8861-.6003 2.4609-.1487.1677-.406.2036-.7719.1078-.3545-.0958-.6975-.2994-1.0291-.6107-.3202-.3234-.4974-.7305-.5317-1.2215.0114-.4431.1257-.976.343-1.5987.2287-.6227.446-1.1256.6518-1.5088-.4917.2634-1.0234.94-1.5952 2.0298-.5603 1.0897-1.0291 2.2812-1.4065 3.5745-.3773 1.2814-.5374 2.3591-.4802 3.2333.0686.8622.4859 1.2095 1.2521 1.0418.9033-.2874 1.8124-.9999 2.7272-2.1375.9148-1.1377 1.8582-2.4549 2.8302-3.9518.3887-.5988.789-1.1975 1.2006-1.7963Z"
      />
      <path
        fill="#000"
        d="M62.8272 29.8288c.0686-.0838.1715-.1018.3087-.0539.1372.036.2802.1138.4288.2336.1487.1197.263.2454.3431.3772.0914.1197.1143.2215.0686.3053-.183.3114-.3888.6766-.6175 1.0958-.5374.9819-1.1778 2.0657-1.9211 3.2512-.7318 1.1855-1.538 2.2633-2.4185 3.2333-.8804.958-1.8067 1.5927-2.7786 1.904-.5718.1317-1.2407.0779-2.0069-.1616-.7661-.2396-1.4522-.5928-2.0582-1.0598-.6061-.4791-.9491-.994-1.0292-1.5448-.0915-1.3053.1658-2.8202.7719-4.5446.606-1.7244 1.3893-3.2752 2.3498-4.6523.972-1.3771 1.9497-2.2034 2.9331-2.4789.2058-.0479.4002-.0359.5832.036.1829.0718.4059.1796.6689.3233.1372.0719.2973.1557.4803.2515.0457-.0719.1029-.1617.1715-.2695.1487-.2155.2973-.4251.446-.6287.1486-.2155.2573-.3412.3259-.3772.3888-.1437.8118-.0718 1.2692.2156.4689.2874.8348.6406 1.0978 1.0598.2744.4071.3202.7185.1372.934-.8919.8742-1.6066 1.8502-2.144 2.9279-.526 1.0658-.7262 1.8861-.6004 2.4609-.1486.1677-.4059.2036-.7718.1078-.3545-.0958-.6976-.2994-1.0292-.6107-.3201-.3234-.4974-.7305-.5317-1.2215.0114-.4431.1258-.976.3431-1.5987.2287-.6227.4459-1.1256.6517-1.5088-.4917.2634-1.0234.94-1.5951 2.0298-.5603 1.0897-1.0292 2.2812-1.4065 3.5745-.3774 1.2814-.5375 2.3591-.4803 3.2333.0686.8622.486 1.2095 1.2521 1.0418.9034-.2874 1.8125-.9999 2.7273-2.1375.9148-1.1377 1.8581-2.4549 2.8301-3.9518.3888-.5988.789-1.1975 1.2007-1.7963Z"
      />
      <path
        fill="#000"
        d="M80.4941 24.6376c1.3379.7066 2.3842 1.4969 3.1389 2.3711.7661.8622 1.012 2.1735.7375 3.9338-.1715.8383-.5317 2.0777-1.0806 3.7183-.5031 1.5328-.9776 3.1195-1.4236 4.7601-.446 1.6286-.669 3.0117-.669 4.1494.0115 1.1496.4289 1.7663 1.2522 1.8501-.2859.5269-.8119.6946-1.578.503-.7547-.1797-1.4351-.6766-2.0412-1.4909-.606-.8143-.8119-1.8981-.6175-3.2513.4003-1.8202 1.012-3.8619 1.8353-6.1252.4917-1.3892.8691-2.5507 1.1321-3.4848.3659-1.2574.4288-2.2992.1887-3.1255-.2402-.8382-.9148-1.4729-2.024-1.904-.0229 2.2154-.6975 4.8259-2.024 7.8317-1.315 3.0057-2.8073 5.0774-4.4767 6.2151-.4574.2395-1.0463.2694-1.7667.0898-.709-.1797-1.3665-.497-1.9726-.9521-.5946-.455-.9548-.9699-1.0806-1.5447-.1029-.958.0115-2.1256.3431-3.5028-.3774.4671-.8005 1.0419-1.2693 1.7245-.9033 1.3771-1.9439 2.6764-3.1217 3.8979-.3202.2514-.7719.3053-1.3551.1616-.5831-.1437-1.1091-.4131-1.578-.8083-.4802-.3952-.7147-.8263-.7032-1.2933.2058-1.8921.829-3.85 1.8696-5.8738 1.0291-2.0238 2.1783-3.5985 3.4476-4.7242.6975-.5628 1.3322-.7544 1.9039-.5748.5832.1677 1.1664.479 1.7496.9341.2172.1437.4402.2934.6689.449.1029-.1556.223-.3472.3602-.5748.1372-.2155.2744-.4251.4117-.6287.1372-.2035.2572-.3652.3602-.4849.2858-.2635.6632-.3054 1.132-.1258.4803.1677.8805.4371 1.2007.8083.3316.3713.4116.7365.2401 1.0958-1.3836 2.4429-2.2184 4.5385-2.5042 6.2869-.2745 1.7364-.2459 2.7662.0857 3.0896.3888.2514.9949-.1557 1.8182-1.2215.8347-1.0778 1.6237-2.4429 2.367-4.0955.7433-1.6525 1.1835-3.2333 1.3207-4.7421.1487-1.5089-.2744-2.5747-1.2692-3.1974-.2859-.1916-.3717-.4969-.2573-.9161.1143-.4191.3373-.8322.6689-1.2394.3431-.4191.6976-.7125 1.0635-.8802.3773-.1796.6803-.1137.909.1976.1716.2635.3145.491.4289.6826.1943.3593.423.6826.6861.97.2744.2874.7718.6347 1.4922 1.0418Zm-12.2296 6.3947c.0571-.1077.0914-.2754.1029-.5029.0229-.2395 0-.4611-.0686-.6646-.0572-.2156-.1601-.3413-.3088-.3773-.1486-.0479-.3545.0599-.6175.3234-1.0291 1.1616-1.8924 2.4908-2.59 3.9877-.6975 1.4969-1.0691 2.5626-1.1149 3.1973.5489-.5029 1.2979-1.3891 2.247-2.6584.9605-1.2814 1.7438-2.3831 2.3499-3.3052ZM95.5024 34.9841c.2287-.0239.3774.0898.446.3413.0686.2395.0686.491 0 .7544-.0572.2515-.1658.3952-.3259.4311-.4917.0719-.972.0898-1.4408.0539-.4688-.0359-.9948-.1557-1.578-.3592-.0458.0958-.0972.2035-.1544.3233-.2516.6107-.6289 1.3352-1.1321 2.1735-.4917.8382-1.1091 1.4909-1.8524 1.9579-.5146.2515-1.1549.2814-1.9211.0898-.7547-.1916-1.4579-.5269-2.1097-1.0059-.6518-.491-1.0749-1.0478-1.2693-1.6705-.1944-.8622-.1772-1.7963.0515-2.8022.2287-1.0179.5603-1.9639.9948-2.8381.4231-.8742.8519-1.5268 1.2864-1.9579.1487-.1557.3145-.2994.4975-.4311.08-.0599.16-.1198.2401-.1796-.0915-.503-.143-1.006-.1544-1.5089 0-.503.1086-.982.3259-1.437.3202-.5149.9434-.7724 1.8696-.7724.9377-.012 1.8525.2754 2.7444.8622.8919.5868 1.4351 1.5029 1.6295 2.7483.0914.8502.08 1.6825-.0343 2.4968-.103.8023-.2573 1.6226-.4632 2.4609.2287.1317.5604.2335.9949.3053.4345.0599.8862.0479 1.355-.0359Zm-8.5075 4.0057c.8461-.5269 1.4865-1.1496 1.921-1.8681.446-.7185.8176-1.4909 1.1149-2.3172-.789-.5389-1.3893-1.2514-1.801-2.1376-.1601.1916-.3716.6886-.6346 1.4909-.2516.7904-.4574 1.6466-.6175 2.5687-.1487.9221-.1429 1.6765.0172 2.2633Zm3.5505-6.1971c.1601-.4551.2458-.994.2573-1.6167.0228-.6347-.0057-1.2214-.0858-1.7603-.08-.5509-.1887-.9341-.3259-1.1496-.6746 1.0418-.6232 2.5507.1544 4.5266Z"
      />
      <path
        fill="#FD5956"
        fillRule="evenodd"
        d="M28.1494 3.4177c5.8953 3.8102 7.7904 11.5604 4.3185 17.6611l-8.3145 14.6096c-1.8226 3.2025-4.8709 5.1871-8.169 5.7818 1.2168-2.5478 2.5114-5.034 3.8839-7.4586 1.77-3.1377 3.5023-5.5205 5.1967-7.1487.885-.7763 1.7107-1.2022 2.477-1.2777.7771-.0755 1.2897.124 1.538.5984.2698-.4959.1618-.9219-.3238-1.2777-.4749-.3558-1.1549-.5876-2.0399-.6954-.8742-.1079-1.7916-.0378-2.7521.2102-.9606.248-1.7916.7278-2.4932 1.4395-1.6081 1.7683-3.3619 4.5717-5.2615 8.4102-1.0509 2.1358-2.1753 4.5837-3.3733 7.3438-1.0099-.0885-2.0147-.3076-2.98785-.6619.05897-.3666.11794-.7232.17695-1.0697.1079-.593.1942-1.1052.259-1.5365.0324-.1833.0593-.372.0809-.5661.1943-1.1537.3508-2.3505.4695-3.5905.1295-1.2507.1295-2.4098 0-3.4773-.1295-1.0782-.4911-1.9462-1.08466-2.6039-.58281-.6685-1.48941-1.0028-2.71979-1.0028-1.80239.0755-3.42132.7548-4.85676 2.0379-.77968.6969-1.482941 1.4797-2.1097823 2.3485-.2368757-1.6678.1842963-3.4236 1.3055123-4.8457.59965-.7605 1.01816-1.6477 1.22375-2.5941l1.61976-7.4565c.71778-3.3043 2.36217-6.3357 4.7406-8.73915l2.60537-2.63274C15.9646.771375 22.8886.0176556 28.1494 3.4177ZM7.38642 37.0684c-.12402.6608-.26344 1.4446-.41824 2.3515-.24903-.1807-.49333-.3726-.7323-.5758l-3.99032-3.3933c-.29139-.2478-.5551-.5164-.79073-.8017.11878-.2724.24501-.5442.37869-.8154.70153-1.4341 1.4948-2.6363 2.37981-3.6067.88501-.9704 1.75383-1.488 2.60646-1.5526.65837.0107 1.0577.4582 1.19801 1.3424.1403.8733.12951 1.9569-.03238 3.2508-.1619 1.2831-.36156 2.55-.599 3.8008ZM17.8309 17.9217c2.0735-.5093 4.0094-.7835 5.8077-.8227-.1361.1015-.2788.205-.4281.3102-1.0367.7976-2.2613 1.6448-3.6739 2.5416-1.4077.8885-3.0185 1.6557-4.8322 2.3017-3.0581 1.0119-5.14645 1.4624-6.26509 1.3513-1.11863-.111-1.35174-.546-.69932-1.3049.65243-.759 2.10698-1.6151 4.36371-2.5685 1.7496-.705 3.6587-1.3079 5.7272-1.8087Zm-3.9704-2.5132c.7344.1496 1.3881.1469 1.961-.0081-.7934-.0488-1.4113-.2944-1.8538-.7368-.4425-.4423-.6092-.9346-.5001-1.4768.2825-1.0257 1.0439-1.952 2.2841-2.7792 1.2452-.83545 2.6993-1.51284 4.3621-2.0321 1.6629-.51927 3.2629-.8281 4.8-.9265 1.5371-.09839 2.7453.07485 3.6247.51973.7299.4381 1.0462 1.0212.9489 1.74929-.0842.72438-.3918 1.48388-.9226 2.27848-.5259.7862-1.0799 1.4893-1.6619 2.1093-.5689.6162-.9706 1.031-1.2051 1.2445-2.4014-.1476-4.7293-.0743-6.9838.22-2.2414.2905-4.2345.756-5.9792 1.3965-2.85273 1.0729-4.85382 2.1607-6.00332 3.2634-.72649.6608-1.1812 1.2973-1.36415 1.9095-.18786.6206-.14424 1.1827.13086 1.6863.57816 1.0345 1.82663 1.7008 3.74541 1.9989 1.9188.298 4.1889.0239 6.8104-.8225 2.4752-.8961 4.7562-2.0315 6.8431-3.4063 2.0917-1.3831 3.796-2.7127 5.1127-3.9888.4105-.046.9296-.0247 1.5571.0641.6357.0934 1.2864.2457 1.9519.4568-.0812-.4044-.2707-.7921-.5685-1.1632-.293-.3796-.7345-.6926-1.3245-.9391.818-.9669 1.4323-1.9322 1.8429-2.896.4238-.9675.5002-1.9314.2293-2.8916-.2578-.96393-.9918-1.91928-2.2021-2.86605-1.4503-1.06106-3.1126-1.66636-4.9868-1.81592-1.8742-.14956-3.7486.01973-5.6234.50785s-3.5374 1.17544-4.9878 2.06197c-1.4455.87813-2.4721 1.82695-3.0797 2.84645-.4044.7659-.4904 1.4557-.2578 2.0695.2457.61.6769 1.1186 1.2934 1.5258.6166.4071 1.2855.6873 2.0067.8406Z"
        clipRule="evenodd"
        className="text"
      />
    </svg>
  </S.Wrapper>
)

export default Logo