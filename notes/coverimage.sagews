︠59692941-c0a5-43d7-aa48-37f63832c3aes︠
f(x) = exp(-x/10)*cos(x)
︡cc2d5ec7-b9b9-4b45-b175-82e00f80c050︡{"done":true}︡
︠00dc31f5-2b6f-40a3-8dfd-3fea3c8b8108s︠
G = Graphics()
xs = [i*60/500 for i in range(500)]
for x in xs:
    G += point((x,f(x)), size = 5, color='black')
    G += point((120 - x,f(x)), size = 3, color='black')
︡a9ec0107-7305-4b8c-806b-5523e238d745︡{"done":true}︡
︠67976859-fc92-4568-95ed-3abfbca588c7s︠
G.show()
︡4319b7c9-b37d-4bda-bc06-e35ea0f1ef27︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_ot6X6u.svg","show":true,"text":null,"uuid":"3c9daf32-894a-4f35-80d1-7dbb1d8dfa50"},"once":false}︡{"done":true}︡
︠3597bff4-02d3-43d9-9305-06b3e4bc10e4︠
G.save(filename = "dots.png", axes=False)
︡ccbc1f86-a11d-42b2-8d42-631ebd7890ba︡{"done":true}︡
︠dc8b695c-805d-46fe-b187-4f4912135973︠

︡b774dfdb-59ae-485e-b087-edcacdc5940d︡
︠ff399097-3327-4586-a534-37e147167427︠

︡621dc7a5-06ef-40f5-9c8d-b4a4dcd979f4︡
︠56553724-b465-46a8-a635-bd31f4c15687s︠
D = SymmetricGroup(5)
D
︡5e0c8004-f3ca-4344-ba34-9d0d9e718481︡{"stdout":"Symmetric group of order 5! as a permutation group\n"}︡{"done":true}︡
︠04461cef-b173-4163-b864-5e67ad261194︠

︡87b634e9-d3e8-4fba-a49a-146205835708︡
︠7df057da-68c7-433b-93a8-e853c4320c09︠
D.cayley_graph()
︡c13b5939-ff9f-48e4-bc67-d58b8cf68888︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_HQdNjY.svg","show":true,"text":null,"uuid":"4a2b7491-cde1-4db4-9602-931d6dea5782"},"once":false}︡{"done":true}︡
︠76a51111-5643-4b5e-b981-9d52d8934c95s︠
A5 = AlternatingGroup(5)
H = A5.cayley_graph()
H.show3d(color_by_label=True, edge_size=0.01, edge_size=0.02, vertex_size=0.03)
︡8564fd3e-824b-408c-a942-3a56804db7e6︡{"stderr":"Error in lines 3-3\nTraceback (most recent call last):\n  File \"/projects/sage/sage-7.6/local/lib/python2.7/site-packages/smc_sagews/sage_server.py\", line 995, in execute\n    exec compile(block+'\\n', '', 'single') in namespace, locals\n  File \"<string>\", line 1\nSyntaxError: keyword argument repeated\n"}︡{"done":true}︡
︠44e213eb-9ffc-4bf6-9e8b-c3b8dc8181fas︠
C = SymmetricGroup(4)
M=C.cayley_table().table()
P = matrix_plot(M, cmap='Greys', frame=False)
P
︡fcf5d54e-dd00-4832-b0b2-35e3cbdb2292︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_IrMTUV.svg","show":true,"text":null,"uuid":"53f2b7b2-e5b9-4110-9585-9a096dd1ceb1"},"once":false}︡{"done":true}︡
︠ad4cd92b-d1f2-4b05-8dea-c458345307a0s︠
P.save_image(filename='cayley.png')
︡58e2eb84-6a41-449e-be34-e4fa47ac6b41︡{"done":true}︡
︠1561e077-96d6-4e32-a14f-84080a7ef9d0s︠
import matplotlib.cm; matplotlib.cm.datad.keys()
︡f47023b6-1f49-4dfa-b011-cf1fbf4c46f2︡{"stdout":"[u'Spectral', u'summer', u'coolwarm', u'Wistia_r', u'pink_r', u'Set1', u'Set2', u'Set3', u'brg_r', u'Dark2', u'hot', u'PuOr_r', u'afmhot_r', u'terrain_r', u'PuBuGn_r', u'RdPu', u'gist_ncar_r', u'gist_yarg_r', u'Dark2_r', u'YlGnBu', u'RdYlBu', u'hot_r', u'gist_rainbow_r', u'gist_stern', u'gnuplot_r', u'cool_r', u'cool', u'gray', u'copper_r', u'Greens_r', u'GnBu', u'gist_ncar', u'spring_r', u'gist_rainbow', u'RdYlBu_r', u'gist_heat_r', u'Wistia', u'OrRd_r', u'CMRmap', u'bone', u'gist_stern_r', u'RdYlGn', u'Pastel2_r', u'spring', u'terrain', u'YlOrRd_r', u'Set2_r', u'winter_r', u'PuBu', u'RdGy_r', u'spectral', u'flag_r', u'jet_r', u'RdPu_r', u'Purples_r', u'gist_yarg', u'BuGn', u'Paired_r', u'hsv_r', u'bwr', u'cubehelix', u'YlOrRd', u'Greens', u'PRGn', u'gist_heat', u'spectral_r', u'Paired', u'hsv', u'Oranges_r', u'prism_r', u'Pastel2', u'Pastel1_r', u'Pastel1', u'gray_r', u'PuRd_r', u'Spectral_r', u'gnuplot2_r', u'BuPu', u'YlGnBu_r', u'copper', u'gist_earth_r', u'Set3_r', u'OrRd', u'PuBu_r', u'ocean_r', u'brg', u'gnuplot2', u'jet', u'bone_r', u'gist_earth', u'Oranges', u'RdYlGn_r', u'PiYG', u'CMRmap_r', u'YlGn', u'binary_r', u'gist_gray_r', u'Accent', u'BuPu_r', u'gist_gray', u'flag', u'seismic_r', u'RdBu_r', u'BrBG', u'Reds', u'BuGn_r', u'summer_r', u'GnBu_r', u'BrBG_r', u'Reds_r', u'RdGy', u'PuRd', u'Accent_r', u'Blues', u'Greys', u'autumn', u'cubehelix_r', u'nipy_spectral_r', u'PRGn_r', u'Greys_r', u'pink', u'binary', u'winter', u'gnuplot', u'RdBu', u'prism', u'YlOrBr', u'coolwarm_r', u'rainbow_r', u'rainbow', u'PiYG_r', u'YlGn_r', u'Blues_r', u'YlOrBr_r', u'seismic', u'Purples', u'bwr_r', u'autumn_r', u'ocean', u'Set1_r', u'PuOr', u'PuBuGn', u'nipy_spectral', u'afmhot']\n"}︡{"done":true}︡
︠3088d1bc-0b70-46c1-9a76-6725c73b7050s︠
for G in C.subgroups():
    M=G.cayley_table().table()
    matrix_plot(M, cmap='Greys', frame=False)
︡4617e01d-05e0-40a9-8f18-6565475f5c85︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_LQACJn.svg","show":true,"text":null,"uuid":"5dbb582c-7c7f-4b0b-97f7-6e0b6ff6b51c"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_MMhrGQ.svg","show":true,"text":null,"uuid":"20fdbff1-1415-4e1a-8433-2a87ffa528cc"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_H4YaWc.svg","show":true,"text":null,"uuid":"cd43d6de-dc9e-4113-8a2f-6ed03d9c2a3f"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_Rs8Xfy.svg","show":true,"text":null,"uuid":"82eb9ef2-b24b-4cd6-939d-fcfddd6c4d68"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_GU4iZp.svg","show":true,"text":null,"uuid":"8917a668-5238-4397-8b1d-24b48654c3eb"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_LNQSm4.svg","show":true,"text":null,"uuid":"e4bbe757-c0ef-4a81-946b-5359a5cff449"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_yxCpFU.svg","show":true,"text":null,"uuid":"514e78f2-12eb-4092-90da-e0b5de6d64cc"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_fjxk0R.svg","show":true,"text":null,"uuid":"2d9bc6a2-afe5-461b-a7c3-d729bdca8c0f"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_Pgts9q.svg","show":true,"text":null,"uuid":"070d3a18-6b4b-4857-824b-f99c1660e79d"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_k4nl9E.svg","show":true,"text":null,"uuid":"d84c3c4b-a188-4c08-93ab-929afb79f197"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_qJdnIo.svg","show":true,"text":null,"uuid":"69e64d28-ee0e-4cb4-9bee-5dddc14cf6bc"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_5kqYxu.svg","show":true,"text":null,"uuid":"ef0bbb4b-399d-4117-91e2-78f8584725b9"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_GMqLWs.svg","show":true,"text":null,"uuid":"7f01fec2-dcb2-48c5-a5fc-e055acc67ae2"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_PahdSh.svg","show":true,"text":null,"uuid":"58758427-f18b-4711-92e7-2cf7b0b06458"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_Fe3XxR.svg","show":true,"text":null,"uuid":"6af3cb61-e830-4e2c-b4d8-4eee72919c79"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_gsyi3g.svg","show":true,"text":null,"uuid":"e292b202-0ca6-4456-afec-f09eebf58e47"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_hty9Oj.svg","show":true,"text":null,"uuid":"c1aec736-7cf1-4423-8834-81b9cd2fbffd"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_4RbclT.svg","show":true,"text":null,"uuid":"57b7cfd3-490a-4d67-b2a5-92902c68ce5c"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_h1dSNN.svg","show":true,"text":null,"uuid":"2e97942f-f557-4a6c-b3c6-2a787323085e"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_cGd4BA.svg","show":true,"text":null,"uuid":"b674672e-d9cd-4ae0-b784-835a1de204ad"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_5aSYyZ.svg","show":true,"text":null,"uuid":"468f0b48-60c9-46f5-8ab3-4bf054162915"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_h2ZmWP.svg","show":true,"text":null,"uuid":"2cb18904-4deb-4c76-aa7d-2e1bd9520e6d"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_su0h1E.svg","show":true,"text":null,"uuid":"9ee1af44-df4d-444d-b19b-d8c7221357ca"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_P7RQww.svg","show":true,"text":null,"uuid":"9297dbbd-922e-4bd5-b7ae-2a758600042a"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_v5BrSZ.svg","show":true,"text":null,"uuid":"ea0cdc66-1baf-4397-bc1e-cbfcb386f28c"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_OUnJfm.svg","show":true,"text":null,"uuid":"b2c2a8b8-9c56-431c-8089-4e5a2383278c"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_LQXC_g.svg","show":true,"text":null,"uuid":"682ba6ab-2ff9-4d4e-841a-9e85306a7d40"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_Qt47Kc.svg","show":true,"text":null,"uuid":"5b15982d-3f0d-485c-9d95-41be0b6f1393"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp_Gq4fEL.svg","show":true,"text":null,"uuid":"428787af-7ccb-40ec-93dd-8285490db83d"},"once":false}︡{"file":{"filename":"/projects/a3801a5c-c6a5-4856-9e32-b6a99a7d2600/.sage/temp/compute5-us/845/tmp__rJVjL.svg","show":true,"text":null,"uuid":"d1342932-dd02-4a91-89d5-f2fcd20b259e"},"once":false}︡{"done":true}︡
︠64d308fb-ad6f-41e1-8909-d42b14602f46︠









