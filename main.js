import { Header } from './components/Header';
import './style.css'

const language = 'German';

document.querySelector('#root').innerHTML = /*html*/ `
<div x-data="{language: 'English'}">

  ${Header()}
	<section x-show="language === 'English'">
		<h2>English:</h2>

    <h3>Workshop Title: Introduction to Machine Learning with Python</h3>

    <p><strong>Overview:</strong> Join us for an immersive workshop on the fundamentals of machine learning using Python. This hands-on session will cover key concepts, algorithms, and practical applications, making it suitable for both beginners and intermediate enthusiasts.</p>

    <p><strong>Agenda:</strong></p>
    <ol>
        <li><strong>Introduction to Machine Learning</strong>
            <ul>
                <li>Understanding basic concepts</li>
                <li>Types of machine learning</li>
            </ul>
        </li>
        <li><strong>Python for Machine Learning</strong>
            <ul>
                <li>Overview of popular libraries (NumPy, Pandas, Scikit-Learn)</li>
                <li>Hands-on coding exercises</li>
            </ul>
        </li>
        <li><strong>Supervised Learning</strong>
            <ul>
                <li>Regression and classification</li>
                <li>Model training and evaluation</li>
            </ul>
        </li>
        <li><strong>Unsupervised Learning</strong>
            <ul>
                <li>Clustering and dimensionality reduction</li>
                <li>Real-world examples</li>
            </ul>
        </li>
        <li><strong>Building a Machine Learning Model</strong>
            <ul>
                <li>Step-by-step guide</li>
                <li>Tips and best practices</li>
            </ul>
        </li>
    </ol>

    <p><strong>Requirements:</strong></p>
    <ul>
        <li>Basic knowledge of Python programming</li>
        <li>Bring your laptop for hands-on exercises</li>
    </ul>
	</section>


<section x-show="language === 'German'">
	 <h2>German:</h2>

    <h3>Workshop-Titel: Einführung in maschinelles Lernen mit Python</h3>

    <p><strong>Überblick:</strong> Nehmen Sie teil an einem intensiven Workshop zu den Grundlagen des maschinellen Lernens mit Python. Diese praxisnahe Sitzung behandelt Schlüsselkonzepte, Algorithmen und praktische Anwendungen und ist sowohl für Anfänger als auch für fortgeschrittene Enthusiasten geeignet.</p>

    <p><strong>Agenda:</strong></p>
    <ol>
        <li><strong>Einführung in maschinelles Lernen</strong>
            <ul>
                <li>Verständnis grundlegender Konzepte</li>
                <li>Arten des maschinellen Lernens</li>
            </ul>
        </li>
        <li><strong>Python für maschinelles Lernen</strong>
            <ul>
                <li>Überblick über beliebte Bibliotheken (NumPy, Pandas, Scikit-Learn)</li>
                <li>Praktische Codierübungen</li>
            </ul>
        </li>
        <li><strong>Überwachtes Lernen</strong>
            <ul>
                <li>Regression und Klassifikation</li>
                <li>Modelltraining und -bewertung</li>
            </ul>
        </li>
        <li><strong>Unüberwachtes Lernen</strong>
            <ul>
                <li>Clustering und Dimensionsreduktion</li>
                <li>Beispiele aus der Praxis</li>
            </ul>
        </li>
        <li><strong>Aufbau eines maschinellen Lernmodells</strong>
            <ul>
                <li>Schritt-für-Schritt-Anleitung</li>
                <li>Tipps und bewährte Methoden</li>
            </ul>
        </li>
    </ol>

    <p><strong>Anforderungen:</strong></p>
    <ul>
        <li>Grundkenntnisse in der Python-Programmierung</li>
        <li>Bringen Sie Ihren Laptop für praktische Übungen mit.</li>
    </ul>
</section>

<section x-show="language === 'Chinese'">
    <h2>英语：</h2>

    <h3>工作坊标题：Python机器学习入门</h3>

    <p><strong>概述：</strong> 加入我们，参与一次关于使用Python学习机器学习基础的沉浸式工作坊。这个实践性的会话将涵盖关键概念、算法和实际应用，适用于初学者和中级爱好者。</p>

    <p><strong>议程：</strong></p>
    <ol>
        <li><strong>机器学习简介</strong>
            <ul>
                <li>理解基本概念</li>
                <li>机器学习类型</li>
            </ul>
        </li>
        <li><strong>Python与机器学习</strong>
            <ul>
                <li>流行库概览（NumPy，Pandas，Scikit-Learn）</li>
                <li>实际编码练习</li>
            </ul>
        </li>
        <li><strong>监督学习</strong>
            <ul>
                <li>回归和分类</li>
                <li>模型训练和评估</li>
            </ul>
        </li>
        <li><strong>无监督学习</strong>
            <ul>
                <li>聚类和降维</li>
                <li>实际例子</li>
            </ul>
        </li>
        <li><strong>构建机器学习模型</strong>
            <ul>
                <li>逐步指南</li>
                <li>技巧和最佳实践</li>
            </ul>
        </li>
    </ol>

    <p><strong>要求：</strong></p>
    <ul>
        <li>基本的Python编程知识</li>
        <li>携带笔记本电脑进行实际练习</li>
    </ul>
</section>
</div>
`
