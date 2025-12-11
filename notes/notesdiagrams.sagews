︠0e8dcc20-b59e-47ef-b839-24793e8d0199s︠
f(x)=1/x
top = 10
P=plot(f(x),(x,0.8,top+1), color='black')
for i in range(1,top):
    verts = [(i,0),(i,f(i)),(i+1,f(i)),(i+1,0)]
    P+=plot(polygon2d(verts, rgbcolor=(0.6,0.6,0.6), fill = False))
P.show(aspect_ratio=4)
P.save_image(filename='integraltest.png',aspect_ratio=4)
︡d3dd83b2-3082-4acf-a8da-99665b954845︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/1277/tmp_XHS6yi.svg","show":true,"text":null,"uuid":"02f385a4-0873-406b-8753-69f14564445f"},"once":false}︡{"done":true}︡
︠3e313721-0c9c-4edb-8d08-e0154c1c2989s︠
P=Graphics()
f(x)=1/x^(1.2)
sum =0
for n in range(1,50):
    sum+=(-1)^n * f(n)
    if is_even(n):
        col=(0,0,0)
    else:
        col=(0.6,0.6,0.6)
    P+=point((n,sum),rgbcolor=col, size=20)
P
P.save_image(filename='alternatingseries.png')

︡9c8c22e8-f9d7-4557-9ee2-0657cf114f2b︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/1277/tmp_LxGEgV.svg","show":true,"text":null,"uuid":"8c59ef9c-4326-4c29-9e0e-8636f63ce8b0"},"once":false}︡{"done":true}︡
︠f6162793-e9b4-4802-96b4-f663e156181fs︠
sorted(colors)
︡cc1393bc-34fc-4308-8beb-ce463488e5cb︡{"stdout":"['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'automatic', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']\n"}︡{"done":true}︡
︠0403797e-0118-48a4-838c-69df37dd80b3︠
60*0.4 + 43*0.6
︡5010caea-cd2f-49e0-8feb-c08eddd71886︡{"stdout":"49.8000000000000\n"}︡{"done":true}︡
︠ec89b401-bff0-4400-bcdb-aa43aa3f47d9︠
f1(x)=3*x - 2
f2(x)=-4/3 * x +6

P=plot(f1(x),(x,-1,0.95))
P+=plot(f2(x),(x,1.1,4))
P+=circle((1,f1(1)), 0.15, edgecolor='blue',fill=False)
P+=circle((1,f2(1)), 0.15, edgecolor='blue',fill=False)
P+=circle((1,4), 0.15, edgecolor='blue',fill=True)
P.show(xmin=-3)
P.save_image(filename='discon.png',xmin=-3)
︡f9731415-ecfc-4bcd-9daf-6d48abd141b3︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/10686/tmp_eMU3bW.svg","show":true,"text":null,"uuid":"8f883c6e-fbb3-4173-9407-f15841d53937"},"once":false}︡{"done":true}︡
︠51ac7934-467e-4641-a330-e2699169dfb3︠
g(x) = 1/x

P=plot(g(x),(x,-1,1))

P.show(ymax=20,ymin=-20)
P.save_image(filename='oneoverx.png',ymax=20,ymin=-20)
︡b77d7c37-eb73-4eb8-8df9-8920ecb82460︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/458/tmp_mxzaVg.svg","show":true,"text":null,"uuid":"f3b73258-bade-4f82-a78d-57ba2fb64194"},"once":false}︡{"done":true}︡
︠13a891c5-ca5e-4f92-ac13-3ec6c5b8bc08︠
2+2
︡dcb969b4-907b-4a48-a109-778afc0dceab︡{"stdout":"4\n"}︡{"done":true}︡
︠11e272dc-8096-4682-ad2b-6c949b1e0cf4︠
h(x) = sin(1/x)

P=plot(h(x),(x,-2,2), thickness=0.5, plot_points=20000, frame=True)
P
P.save_image(filename='sin1overx.png')
︡0d50b3db-1ac2-481f-9284-3f6897152f31︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/503/tmp_B94X5e.svg","show":true,"text":null,"uuid":"c0f6b3c6-fbf5-45c8-a04d-736671469c28"},"once":false}︡{"done":true}︡
︠3bd08179-6483-4259-9622-b61c23ed975fs︠
Q= Graphics()
domains = [[(0,0),(10,0)],[(15,0),(25,0)],[(30,0),(40,0)]]
for d in domains:
    Q+=line(d)
points = [(5,0),(20,0),(35,0)]
for p in points:
    Q+=point(p,size=40)

# point labels
Q+=text('$a$',(points[0][0],-1),color='black', fontsize='large')
Q+=text('$f(a)$',(points[1][0],-1),color='black',fontsize='large')
Q+=text('$g(f(a))$',(points[2][0],-1),color='black',fontsize='large')

#interval brackets
Q+=text('$($',(points[0][0]-0.5,0),color='green',fontsize='large',fontweight='bold')
Q+=text('$)$',(points[0][0]+0.5,0),color='green',fontsize='large',fontweight='bold')
Q+=text('$($',(points[1][0]-1,0),color='red',fontsize='large',fontweight='bold')
Q+=text('$)$',(points[1][0]+1,0),color='red',fontsize='large',fontweight='bold')
Q+=text('$($',(points[2][0]-2,0),color='blue',fontsize='large',fontweight='bold')
Q+=text('$)$',(points[2][0]+2,0),color='blue',fontsize='large',fontweight='bold')

# radius labels
Q+=text('radius $\epsilon_2$',(points[0][0],1),color='black',fontsize='medium',fontweight='normal')
Q+=text('radius $\epsilon_1$',(points[1][0],1),color='black',fontsize='medium',fontweight='normal')
Q+=text('radius $\epsilon_0$',(points[2][0],1),color='black',fontsize='medium',fontweight='normal')

# function arrows
Q+=arrow2d(tailpoint=(11,0.5), headpoint=(14,0.5),color='black' , width=1 , arrowsize=3 )
Q+=arrow2d(tailpoint=(26,0.5), headpoint=(29,0.5),color='black' , width=1 , arrowsize=3 )
# function labels
Q+=text('$f$',(12.5,1),color='black', fontsize='large')
Q+=text('$g$',(27.5,1),color='black',fontsize='large')


show(Q,axes=False, aspect_ratio=2,ymax=1)
Q.save_image(filename='compcont.png',axes=False, aspect_ratio=2,ymax=1)
︡dead6fb0-9ba7-4d9e-b7c5-6d59fc512504︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/4738/tmp_UNelvM.svg","show":true,"text":null,"uuid":"cbc87085-72f9-4832-8948-692a71c2e5ce"},"once":false}︡{"done":true}︡
︠f42e7c6f-623f-428e-9837-9e668a935c1f︠
x=(0,0)
x
︡7158a0b0-9ff5-41e2-8804-0ad04aafe56c︡{"stdout":"(0, 0)\n"}︡{"done":true}︡
︠1bf8ea91-6753-48ac-aa8b-afd7fb26d76b︠
x[0]
︡e86264a2-bd2b-473d-9a70-6df01da081a8︡{"stdout":"0\n"}︡{"done":true}︡
︠259bc643-fc9c-4d8d-8e29-65f1698cf3eb︠
x[1]
︡ef9b87cd-25e3-4af8-9c65-c19e0846c4e0︡{"stdout":"0\n"}︡{"done":true}︡
︠253f772a-bdba-47d4-8414-64f9e4316419s︠
f(x) = x^3 -10*x +7
g(x) = diff(f,x)
a=-4
k =var('k')
y(k)=f(a)+k*g(a)
P=plot(f(x), (x,-5,1))
P+=plot(y(x-a),(x,-5,-2),color='red')
P+=point((a,f(a)),size=30,color='black')
P+=point((a,0),size=30,color='black')
#P+=circle((a,-20), 2, color='red', fill=False)
P+=line([(a,-60),(a,60)], linestyle='--',color='red')
P+=text('$\mapsto k$', (a,-30), horizontal_alignment='left', color='red', fontsize='large')
P+=text('$a$', (a-0.2,5), horizontal_alignment='left', color='black', fontsize='large')
P+=text('$y(k)=f(a)+kf\'(a)$', (-1.9,y(2)), horizontal_alignment='left', color='red', fontsize='large')
P+=text('$y(x)=f(x)$', (-2,f(-2)-3), horizontal_alignment='left', vertical_alignment='top',color='blue', fontsize='large')


P.show(frame=False,ticks=[[],[]])
P.save_image(filename='linapprox.png', ticks=[[],[]])
︡43120c92-7489-4eca-b55b-276ad5558caa︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/11551/tmp_h2T2Ms.svg","show":true,"text":null,"uuid":"4139a371-477f-450c-b05b-c673476e5bf6"},"once":false}︡{"done":true}︡
︠cd80406f-538f-4cc4-b642-c2186f402c73s︠
f(x) = x^3 -10*x +7
a=-4
b=6
C=100
c=solve(f(x)==C,x)
c=c[2].rhs()

# points and lines
P=plot(f(x), (x,-5,7))
P+=point((a,0),size=30,color='black')
P+=point((a,f(a)),size=30,color='black')
P+=point((b,0),size=30,color='black')
P+=point((b,f(b)),size=30,color='black')
P+=line([(a,C),(b,C)], linestyle='--',color='red')
P+=point((c,f(c)),size=30,color='red')
P+=point((c,0),size=30,color='red')
P+=point((0,C),size=30,color='red')

#labels
P+=text('$a$', (a-0.2,10), horizontal_alignment='left', color='black', fontsize='xx-large')
P+=text('$b$', (b,-15), horizontal_alignment='left', color='black', fontsize='xx-large')
P+=text('$c$', (c,-15), horizontal_alignment='left', color='red', fontsize='xx-large')
P+=text('$f(c)=C$', (-0.2,C+15), horizontal_alignment='right', color='red', fontsize='xx-large')

P.show(ticks=[[],[]], frame=False)
P.save_image(filename='intervalthm.png',ticks=[[],[]], frame=False)
︡a8719f58-9a0a-49e6-8b9e-7430ea907b9d︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/14615/tmp_T4z9D2.svg","show":true,"text":null,"uuid":"7ee68c85-fbbe-442f-bea3-8132f8c4c498"},"once":false}︡{"done":true}︡
︠731cc08c-f0bc-4035-8487-0f1c260b318fs︠
c[2].rhs()
︡e5344d75-72f9-4491-a502-482570c61353︡{"stdout":"(1/18*sqrt(229523)*sqrt(3) + 93/2)^(1/3) + 10/3/(1/18*sqrt(229523)*sqrt(3) + 93/2)^(1/3)\n"}︡{"done":true}︡
︠0ed838a3-cc63-4ab2-bcae-5b24da8ee0fe︠

︡2b4b8e56-eefc-4f5c-ba78-30dd1664a71c︡
︠423203e1-9814-46f8-b565-2c970afd82ebs︠
t = var('t')
x(t) = t^2
y(t)=2*t - 1

P = parametric_plot((x(t),y(t)),(t,-1,1))

P.show(aspect_ratio = 0.3)
P.save_image(filename='param1.png',   aspect_ratio = 0.3)
︡3314d0e3-119d-4430-82f7-9a2de464a476︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/14615/tmp_5nTPSz.svg","show":true,"text":null,"uuid":"f10d3560-9471-4f5c-8e68-0e139f43358d"},"once":false}︡{"done":true}︡
︠25a9468a-994b-4ba8-aa2a-e187f1802b77s︠
t = var('t')
x(t) = cos(t) - cos(2*t)
y(t)=sin(t) - sin(2*t)

P = parametric_plot((x(t),y(t)),(t,-pi,pi))

P.show(aspect_ratio = 1, xmin=-2.5, xmax=2, ymin=-2, ymax=2)
P.save_image(filename='param2.png', aspect_ratio = 1, xmin=-2.5, xmax=2, ymin=-2, ymax=2)
︡816c3711-ad48-4687-8e23-189c75575f1b︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/14615/tmp_L9E9_n.svg","show":true,"text":null,"uuid":"35f9a106-3a0d-4e63-af91-0885b24459a2"},"once":false}︡{"done":true}︡
︠20b42abd-9203-435d-a417-b5b912e89844s︠
f(x) = x^3 -10*x +7
a=-sqrt(10/3)
a=-b

P=plot(f(x),(x,-5,6))
P+=point((a,f(a)),size=30,color='black')

P.show(axes=False, frame=True, aspect_ratio = 0.05)
P.save_image(filename='localmax.png', axes=False, frame=True, aspect_ratio = 0.05)
︡ee546537-27c7-41fe-85ef-4d910233ce38︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/14615/tmp_7d8pKJ.svg","show":true,"text":null,"uuid":"da49f160-5094-40a8-82be-76b0f6b30fb2"},"once":false}︡{"done":true}︡
︠e66aa9de-f758-4983-9546-e93ed3d7d176s︠
f(x) = x^3
a=0

P=plot(f(x),(x,-5,5))
P+=point((a,f(a)),size=30,color='black')

P.show(axes=False, frame=True, aspect_ratio = 0.05)
P.save_image(filename='inflection.png', axes=False, frame=True, aspect_ratio = 0.05)
︡b4c0f59c-ada4-4ced-b630-aacaff6b395e︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/14615/tmp_gDUswh.svg","show":true,"text":null,"uuid":"752ee4a6-62ba-4153-8d0d-1805f8c6923d"},"once":false}︡{"done":true}︡
︠77df59b1-4382-4ed7-9374-689693e8547ds︠
S=[(n^2+2)/2^n for n in range(1,101)]
P=list_plot(S)
P
P.save(filename="list.png")
︡d51203d5-4d8c-4fe7-99e9-814ae6b80a79︡{"file":{"filename":"/home/user/.sage/temp/project-a3801a5c-c6a5-4856-9e32-b6a99a7d2600/27370/tmp_8TBJGx.svg","show":true,"text":null,"uuid":"bce6da48-14e6-4c39-badc-669e88b29bf7"},"once":false}︡{"done":true}
︠fa0aaf7e-3d48-4a4b-8040-c4778fab4db3︠









