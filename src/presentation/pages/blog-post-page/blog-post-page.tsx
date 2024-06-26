import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ColoredText, Footer, NavBar } from "../../components";
import { db } from "../../../data/firebase";
import { FaArrowRight, FaEye, FaSpinner } from "react-icons/fa6";
import { logos } from "../../../utils";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Helmet } from "react-helmet";  // Importação do react-helmet

interface Post {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    imageUrl: string;
    views?: number;
    createdAt: firebase.firestore.Timestamp;
}

export function BlogPostPage() {
    const { postId } = useParams<{ postId: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            const postDoc = await db.collection('posts').doc(postId).get();
            if (postDoc.exists) {
                const postData = postDoc.data() as Omit<Post, 'id'>;
                // Incrementar a contagem de visualizações
                await db.collection('posts').doc(postId).update({
                    views: (postData.views || 0) + 1,
                });
                setPost({ id: postDoc.id, ...postData });
                setLoad(false);
            }
        };

        fetchPost();
    }, [postId]);

    const calculateReadingTime = (text: string) => {
        const wordsPerMinute = 200;
        const words = text.split(/\s+/).length;
        return Math.ceil(words / wordsPerMinute);
    };

    const [posts, setPosts] = useState<Post[]>([]);

    const formatDate = (timestamp: firebase.firestore.Timestamp) => {
        const dateObject = timestamp.toDate();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return dateObject.toLocaleDateString('pt-BR', options);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            const postsCollection = await db.collection('posts').orderBy('createdAt', 'desc').get();
            setPosts(postsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post)));
        };

        fetchPosts();
    }, []);


    document.title = `${post?.title} | Blog Sergest - Software de Faturação`;
    return (
        <div>
            <Helmet>
                <title>{post ? post.title : 'Carregando...'} | Sergest - Software de Faturação</title>
                <meta property="og:title" content={post ? post.title : 'Carregando...'} />
                <meta property="og:description" content={post ? post.subtitle : 'Carregando...'} />
                <meta property="og:image" content={post ? post.imageUrl : ''} />
                <meta property="og:url" content={window.location.href} />
                <link rel="icon" href={post ? post.imageUrl : ''} />
            </Helmet>
            <div className="container">
                <NavBar />
                <br />
                {
                    load &&
                    <div className="grid text-center items-center h-[70vh]">
                        <div>
                            <span className="gap-2 ">
                                <FaSpinner className="m-auto text-7xl text-primary animate-spin" />
                                <br />
                                <span className="mt-6 tracking-wider">
                                    <i> Carregando Artigo... </i>
                                </span>
                            </span>
                        </div>
                    </div>
                }
                {post && (
                    <div>
                        <div className="md:h-[37rem] rounded-lg h-[30rem]" style={{ background: `url('${post.imageUrl}') center center`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
                        <h1 className="mt-4 mb-2 text-3xl font-semibold poppins-regular md:text-5xl">{post.title}</h1>
                        <p className="mb-2 text-sm italic text-gray-400">Publicado em: {formatDate(post.createdAt)}</p>
                        <div className="gap-4 my-auto sm:flex">
                            <h2 className="my-auto text-2xl">{post.subtitle}</h2>
                            <span className="hidden my-auto text-4xl sm:block"> &middot;</span>
                            <p className="flex gap-2 my-auto">
                                <div className="flex gap-2 my-auto text-sm">
                                    <FaEye className="my-auto" /> Visualizações:
                                </div>
                                {post.views}
                            </p>
                        </div>
                        <p className="mb-6 tracking-widest border-b">Tempo estimado de leitura: {calculateReadingTime(post.content)} min</p>
                        <div className="gap-6 md:flex">
                            <div className="w-full md:w-9/12" dangerouslySetInnerHTML={{ __html: post.content }} />
                            <div className="w-full mt-14 md:w-3/12 md:mt-0 md:border-l-2 md:ps-10">
                                <img src={logos.logo} className="mx-auto mt-4 w-100" alt="" />
                                <br />
                                <p className="relative whitespace-break-spaces text-center text-primary mt-[1rem] sm:text-xl mx-auto">
                                    <ColoredText className="text-8xl comma font-bold -mt-3 absolute ms-[-2rem]">
                                        <span>"</span>
                                    </ColoredText>
                                    <span className="text-xl">A Sergest é um software de gestão e faturação especializado em oferecer soluções abrangentes e intuitivas para a otimização de processos empresariais, trabalhamos no mercado nacional desde 2016, atuamos no ramo das Tics, Marca Sergest é propriedade da empresa Sermar.</span>
                                    <ColoredText className="text-8xl comma font-bold -mt-3 absolute me-[-2rem]">
                                        <span>"</span>
                                    </ColoredText>
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />
                        <h2 className="text-2xl font-semibold sm:text-3xl">Outros Artigos da Sergest</h2>
                        <br />
                        <br />
                        <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                            {posts.map((post) => (
                                <div key={post.id} className="post">
                                    <div className="relative h-[14rem] rounded-lg bg-primary overflow-hidden">
                                        <div className="absolute inset-0 transition-transform duration-500 transform bg-center bg-cover hover:scale-110" style={{ backgroundImage: `url('${post.imageUrl}')` }} />
                                    </div>
                                    <h3 className="mt-4 font-bold text-primary">{post.title}</h3>
                                    <h4>{post.subtitle}</h4>
                                    <a className="flex justify-between mt-3 text-blue-600" href={`/blogs/${post.id}`}>
                                        <span className="my-auto hover:underline">Ver artigo</span>
                                        <FaArrowRight className="my-auto text-sm" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
